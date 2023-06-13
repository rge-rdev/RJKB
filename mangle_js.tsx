/**
 * Copyright(c) Roger Jiang
 */

import fs from "fs-extra"
import { exec } from "child_process"

const js_asset_basepath = "build/assets/js/"
const js_file = fs
  .readdirSync(js_asset_basepath)
  .find((file) => file.match(/main\.[a-z0-9]+\.js/))
const js_path = js_asset_basepath + js_file

let js_text = fs.readFileSync(js_path, {
  encoding: "utf8",
})
console.log(`main js path: ${js_path}`)
const raw_js_size = fs.statSync(js_path).size
console.log(`main js size: ${(raw_js_size * 1e-3).toFixed(1)}KB`)

fs.writeFileSync("./test/raw_main.js", js_text) // backup for manual resets

const strip_license_reminder =
  /\/\*! For license information please see main.[a-z0-9]+.js.LICENSE.txt \*\/\n\(/

js_text = js_text.replace(strip_license_reminder, "/*Copyright Roger Jiang*/(") // - 68 bytes!

if (false) {
  /**
   * disabling docs:{id: string}[] ends up breaking noscript mode somehow?!
   */
  const re_uid =
    /(?<={"id":")([0-9a-z-]{1}\/([0-9a-z-]{1,2}\/)*)(?=[A-Za-z0-9-]+")/g // updated for new minified docs generator
  // /((?<={"id":")([A-Za-z-]+\/([A-Za-z0-9-]+\/)*)(?=[A-Za-z0-9-]+")||())/g // assumes NO root docs with numbers!
  // /(?<={"id":")([A-Za-z-]+\/([A-Za-z-]+\/)*)(?=[A-Za-z0-9-]+")/g // missed out slugs with numbers!
  // /(?<={"id":")([A-Za-z-]+\/[A-Za-z-]+(\/[A-Za-z-]+)+\/)(?=[A-Za-z0-9-]+")/g// spot the mistake!

  js_text = js_text.replace(re_uid, "")
}

// regex for sidebar junk removal for minified uid slug version only
//prettier-ignore
// const re_sidebar = /(?<=\[)((,)?{"id":"(intro|[0-9a-z]{1,2}(\/[0-9a-z]{1,2})*\/[a-z0-9]+)","path":"\/[a-z0-9]+","sidebar":"s"}(,)?)+(?=\])/g
// /((,)?{"id":"(intro|[0-9a-z]{1}(\/[0-9a-z]{1})*\/[a-z0-9]+)","path":"\/[a-z0-9]+","sidebar":"s"}(,)?)+/g

// regex for sidebar with semantic uid slugs
//prettier-ignore
const re_sidebar = /(?<="docs":\[)((,)?{"id":"(intro|[0-9a-z]+(\/[0-9a-z]+)*\/[a-z0-9]+)","path":"\/[a-z0-9-\\_]+","sidebar":"s"}(,)?)+/g // 154.4KB

const config_js_id = require("./wiki_entry_uid.js").id
const config_js_path = require("./wiki_entry_uid.js").path

js_text = js_text.replace(
  re_sidebar,
  // '{"id":"4/3mr","path":"/3mr","sidebar":"s"}' // min uid version
  `{"id":"${config_js_id}","path":"${config_js_path}","sidebar":"s"}` // semantic version!
)
/*break sidebar nav for 192KB
const re_sidebar_routeConfig =
  // /(,{path:"\/[a-z0-9-]+(\/[a-z0-9-]+)*",component:u\("\/[a-z0-9-]+(\/[a-z0-9-]+)*","[a-z0-9]+"\),exact:!0})/g
  /(,{path:"\/(?!blog)[a-z0-9-]+((?<!blog)\/[a-z0-9-]+)*(?<!path:"\/js)",component:u\("\/[a-z0-9-]+(\/[a-z0-9-]+)*","[a-z0-9]+"\),exact:!0(,sidebar:"s")})/g // only some of the routes have `,sidebar: "s"` at end!
js_text = js_text.replace(re_sidebar_routeConfig, "")
*/
/* Looks like chunk assignment - break when omit
const re_content_json =
  /,("\/[a-z0-9-\\]+(?<!\/(js|blog))-[a-z0-9]+":{"y":"[0-9]+","content":"[a-z0-9]+"})/
// /((,)?"\/[a-z0-9-\\]+(?<!\/(js|blog))-[a-z0-9]+":{"y":"[0-9]+","content":"[a-z0-9]+"})+/g // selective
// /((,)?"\/[a-z0-9-\\]+":{"y":"[0-9]+","content":"[a-z0-9]+"})+/g // 142KB - but might be critically linked to chunk splitting, breaks
js_text = js_text.replace(re_content_json, "")
*/
/* break wiki & blog tag routing for 131KB
const re_tag_plugins =
  /(,"\/(blog\/)?tags\/[a-z0-9-]+":{"y":"[a-z0-9]+","z":{"plugin":"[a-z0-9]+"},"tag":"[a-z0-9]+"})+/g
js_text = js_text.replace(re_tag_plugins, "")
*/

if (false) {
  /**
   * even accounting for `this`, code somewhere else may still need to invoke it, hence it breaks.
   */

  const re_unmangled_lambda =
    /(function\(\){return (?!this|[a-zA-Z0-9+\[\]=&|.,\(\)-]+(\.(bind|apply|call)\(|this)))([a-zA-Z0-9+\[\]=&|.,\(\)-]+)(})/g
  // /(function\(\){return )([a-zA-Z0-9+\[\]=&|.,\(\)-]+)(})/g

  js_text = js_text.replace(re_unmangled_lambda, "()=>$2")
}
/**
 * minify __comp && __context -=30KB
 */

const re__context = /__context/g //13.2KB
js_text = js_text.replace(re__context, "z")
const re__comp = /__comp/g // 22.2KB
js_text = js_text.replace(re__comp, "y")

const re_mdx_paths = /@site\/docs(\/[0-9a-z]{1,2})*\/[0-9a-z]{1,2}.mdx/g
js_text = js_text.replace(re_mdx_paths, "") // 67.7KB

const re_json_paths =
  /,{path:"\/(?!blog|tags)[a-z0-9-]+((?<!blog)\/[a-z0-9-]+)*",component:u\("\/[a-z0-9-]+(\/[a-z0-9-]+)*","[a-z0-9]+"\),exact:!0}/g // 0.2KB - it's mostly tags!!
// /,{path:"\/(?!blog)[a-z0-9-]+((?<!blog)\/[a-z0-9-]+)*",component:u\("\/[a-z0-9-]+(\/[a-z0-9-]+)*","[a-z0-9]+"\),exact:!0}/g // 116.1KB - breaks routes for semantic slugs but NOT min_uid slugs!
js_text = js_text.replace(re_json_paths, "")

//prism bloat - terrible inefficient library. No apparent option to opt-out of unused languages.
//,a.languages.javascript=a.languages.extend("clike"
//,a.languages.javascript["class-name"][0]
//,a.languages.html=a.languages.markup,
// js_text = js_text.replace(
//   /(\.languages\.markup={comment:{pattern:)(.*)(e\.languages\.context=e\.languages\.latex}\(Prism\)})/g,
//   ""
// )
js_text = js_text.replace(
  "|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen",
  ""
)
js_text = js_text.replace(
  "|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH",
  ""
)
js_text = js_text.replace(
  "ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR",
  ""
)
js_text = js_text.replace(
  "|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip",
  ""
)
js_text = js_text.replace(
  "|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[s;|&]|[<>]()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while",
  ""
)
js_text = js_text.replace(
  "|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS",
  ""
)
js_text = js_text.replace(
  "|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while",
  ""
)
js_text = js_text.replace(
  "|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper",
  ""
)
js_text = js_text.replace(
  "|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|",
  ""
)
js_text = js_text.replace(
  "|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|",
  ""
)
js_text = js_text.replace(
  "|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with",
  ""
)
js_text = js_text.replace(
  "|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout",
  ""
)
js_text = js_text.replace(
  "|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while",
  ""
)
js_text = js_text.replace(
  "|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE",
  ""
)
js_text = js_text.replace(
  "AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR",
  ""
)
js_text = js_text.replace(
  "|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while",
  ""
)

// const re_content = /.{10}(?<!"|-|{| |,|[a-zA-Z]{1}|\(\?:)content(?!"|-|}| |,|[a-zA-Z]{1}).{10}/g // 2654 hits for "content" - 15KB gain after minify to "c" or something similar

// const output_js_path = js_path
// const output_debug_path = "./mangled_js_output.js"

// fs.writeFileSync(output_debug_path, js_text) // useful to see file from root, disable for prod
fs.writeFileSync(js_path, js_text)

// const final_js_size = fs.statSync(output_debug_path).size
const final_js_size = fs.statSync(js_path).size

console.log(
  `reduced ${((raw_js_size - final_js_size) * 1e-3).toFixed(1)}KB by ${(
    (1 - final_js_size / raw_js_size) *
    100
  ).toFixed(1)}% to final bundle size of ${(final_js_size * 1e-6).toFixed(2)}MB`
)

const js_file_br = js_file + ".br"
const js_file_gz = js_file + ".gz"
const js_path_br = js_path + ".br"
const js_path_gz = js_path + ".gz"

fs.removeSync(js_path_br)
fs.removeSync(js_path_gz)

const js_bat = `if exist "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\${js_path_br}" del "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\${js_file_br}"
if exist "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\${js_path_gz}"  del "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\${js_file_gz}" 
"C:\\Program Files\\PeaZip\\res\\bin\\brotli\\brotli.exe" -9 --large_window=27 "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\${js_file}"  -o "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\${js_file_br}"
"C:\\Program Files\\PeaZip\\res\\bin\\7z\\7z.exe" a -tgzip -mx9 -mfb=128 -sccUTF-8 -bb0 -bse0 -bsp2 "-wC:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\" "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\${js_file_gz}" "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\${js_file}"`

const temp_js_bat_path = "mangle_js.bat"

fs.writeFileSync(temp_js_bat_path, js_bat)

exec(temp_js_bat_path)

console.log("executing secondary .bat to rezip chunk assets...")
setTimeout(() => {
  console.log(`output new archives to: ${js_file_br} & ${js_file_gz}`)
}, 2000)
