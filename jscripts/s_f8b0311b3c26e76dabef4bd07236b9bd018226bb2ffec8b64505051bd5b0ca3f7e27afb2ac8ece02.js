window.Profanity = (function() {

    var leetReplace = {
        a: '(a|a\\.|a\\-|4|@|Á|á|À|Â|à|Â|â|Ä|ä|Ã|ã|Å|å|α|Δ|Λ|λ)',
        b: '(b|b\\.|b\\-|8|\\|3|ß|Β|β)',
        c: '(c|c\\.|c\\-|Ç|ç|¢|€|<|\\(|{|©)',
        d: '(d|d\\.|d\\-|&part,|\\|\\)|Þ|þ|Ð|ð)',
        e: '(e|e\\.|e\\-|3|€|È|è|É|é|Ê|ê|∑)',
        f: '(f|f\\.|f\\-|ƒ)',
        g: '(g|g\\.|g\\-|6|9)',
        h: '(h|h\\.|h\\-|Η)',
        i: '(i|i\\.|i\\-|!|\\||\\]\\[|]|1|∫|Ì|Í|Î|Ï|ì|í|î|ï)',
        j: '(j|j\\.|j\\-)',
        k: '(k|k\\.|k\\-|Κ|κ)',
        l: '(l|1\\.|l\\-|!|\\||\\]\\[|]|£|∫|Ì|Í|Î|Ï)',
        m: '(m|m\\.|m\\-)',
        n: '(n|n\\.|n\\-|η|Ν|Π)',
        o: '(o|o\\.|o\\-|0|Ο|ο|Φ|¤|°|ø)',
        p: '(p|p\\.|p\\-|ρ|Ρ|¶|þ)',
        q: '(q|q\\.|q\\-)',
        r: '(r|r\\.|r\\-|®)',
        s: '(s|s\\.|s\\-|5|\\$|§)',
        t: '(t|t\\.|t\\-|Τ|τ)',
        u: '(u|u\\.|u\\-|υ|µ)',
        v: '(v|v\\.|v\\-|υ|ν)',
        w: '(w|w\\.|w\\-|ω|ψ|Ψ)',
        x: '(x|x\\.|x\\-|Χ|χ)',
        y: '(y|y\\.|y\\-|¥|γ|ÿ|ý|Ÿ|Ý)',
        z: '(z|z\\.|z\\-|Ζ)'
    };

    var badWords = [
        /(\s|^)anal/,           //anal
        /(\s|^)anus/,           //anus
        /(\s|^)ass/,            //ass
        /ass+ho+le/,            //asshole
        /ballsack/,             //ballsack
        /b+i+t*c+h+/,           //bitch
        /boo+b/,                //boob
        /ballsack/,             //ballsack
        /blow\s*job/,           //blowjob
        /blow\s*me/,            //blow me
        /c+u+n+t+/,             //cunt
        /(\s|^)c+o+c+k/,        //cock
        /c+h+i+n+k+/,           //chink
        /clit/,                 //clit
        /(\s|^)cum/,            //cum
        /d+o+u+c+h+e+/,         //douche
        /d+i+c+k+/,             //dick
        /d+y+k+e+/,             //dyke
        /dildo/,                //dildo
        /ejaculat/,             //ejaculate
        /f+a+g+/,               //fag
        /f+u*c+k+\S*/,          //fuck
        /fu+k/,                 //fuck
        /g+oo+k+/,              //gook
        /g+oo+c+h+/,            //gooch
        /ga+ywa+d+/,            //gaywad
        /ga+ylo+rd+/,           //gaylord
        /gaa+y/,                //gaaay
        /gangbang/,             //gangbang
        /horny/,                //horny
        /jack\s*off/,           //jackoff
        /jack\s*ass/,           //jackass
        /(\s|^)jap+(\s|$)/,     //jap
        /jerk\s*off/,           //jerkoff
        /jizz+/,                //jizz
        /lesbo+/,               //lesbo
        /masterbai?t/,          //masturbate
        /(\s|^)niga/,            //nigg
        /(\s|^)nigg/,            //nigg
        /nut\s*sack/,           //nutsack
        /penis/,                //penis
        /(\s|^)pri+cks*(\s|$)/, //prick
        /pu+ss+y+/,             //pussy
        /(\s|^)porn/,           //porn
        /(\s|^)piss/,           //piss
        /(\s|^)prick/,          //prick
        /quee+r+/,              //queer
        /r+e+t+a+r+d+/,         //retard
        /rim\s*job/,            //rimjob
        /s+l+u+t+/,             //slut
        /s+k+a+n+k+/,           //skank
        /twat/,                 //twat
        /vagina/,               //vagina
        /(\s|^)wank/,           //wank
        /whore/                 //whore
    ];

    var DEFAULT_REPLACEMENTS = [
            'bunnies',
            'butterfly',
            'kitten',
            'love',
            'gingerly',
            'flowers',
            'puppy',
            'joyful',
            'rainbows',
            'unicorn'
        ],
        DEFAULT_REGEX = /(?:)/;

    var badWordsStrings = [];
    for (var i = 0; i < badWords.length; i++) {
        badWordsStrings.push(badWords[i].source);
    }
    badWordsStrings = badWordsStrings.join('|');

    for (var letter in leetReplace) {
        badWordsStrings = badWordsStrings.replace(
            new RegExp(/([^\\])/.source + letter, 'gi'),
            '$1' + leetReplace[letter]
        );
    }

    DEFAULT_REGEX = new RegExp(badWordsStrings, 'gi');

    function getListRegex (list) {
        for (var i = 0; i < list.length; i++) {
            list[i] = list[i].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        }
        return new RegExp('(' + list.join('|') + ')', 'gi');
    }

    function check (target, forbiddenList) {
        var targets = [],
            regex = forbiddenList ? getListRegex(forbiddenList) : DEFAULT_REGEX;

        if (typeof target === 'string') {
            targets.push(target);
        } else if (typeof target === 'object') {

            util.eachRecursive(target, function (val) {
                if (typeof val === 'string') {
                    targets.push(val);
                }
            });
        }

        return targets.join(' ').match(regex) || [];
    }

    function testString(str, options) {
        str = str || '';
        options = $.extend({
            useDefaultRegex: true,
            extraRegex: null
        }, options || {});

        if (options.useDefaultRegex) {

            if (DEFAULT_REGEX.test(str)) {
                return true;
            }

        }

        if (options.extraRegex) {
            if (options.extraRegex.test(str)) {
                return true;
            }
        }

        return false;
    }

    function purifyString(str, options) {
        str = str || '';

        options = $.extend({
            replacementsList: DEFAULT_REPLACEMENTS,
            extraRegex: null,
            useDefaultRegex: true,
            replace: false,
            obscureSymbol: '*'
        }, options || {});

        var matches = [],
            purified = str;

        if (options.extraRegex) {
            purified = purified.replace(options.extraRegex, function (val) {
                matches.push(val);
                if (options.replace) {
                    return options.replacementsList[Math.floor(Math.random() * options.replacementsList.length)];
                }

                var str = '';
                for (var i = 0; i < val.length; i++) {
                    str += options.obscureSymbol;
                }
                return str;

            });
        }

        if (options.useDefaultRegex) {
            purified = purified.replace(DEFAULT_REGEX, function (val) {
                matches.push(val);
                if (options.replace) {
                    return options.replacementsList[Math.floor(Math.random() * options.replacementsList.length)];
                }

                var str = '';
                for (var i = 0; i < val.length; i++) {
                    str += options.obscureSymbol;
                }
                return str;

            });
        }

        return [ purified, matches ];
    }

    function processString(str, options) {
        str = str || '';

        options = $.extend({
            replacementsList: DEFAULT_REPLACEMENTS,
            extraRegex: null,
            useDefaultRegex: true,
            replace: false,
            isName: false,
            obscureSymbol: '*'
        }, options || {});

        // split the string into the words
        var words = str.split(' ');
        var wordsNew = words;
        var badWordsPos = [];

        for (var i = 0; i < words.length; i++) {
            var word = words[i];

            // clean the word from all special characters
            var wordCleaned = word.replace(/[&\/\\#\-,=+()$~%.'":*?<>{}_]/g, '');
            wordCleaned = wordCleaned.toLowerCase();
            //console.log(word + ' ~ !' + wordCleaned + '!');

            // check for default words
            if (options.useDefaultRegex) {
                DEFAULT_REGEX.lastIndex = 0; // cuz we have /g, we need to reset index in the loop
                if (DEFAULT_REGEX.test(wordCleaned)) {
                    // mark the word as a bad word
                    badWordsPos.push(i);
                }
            }

            // check for extra words
            if (options.extraRegex) {
                options.extraRegex.lastIndex = 0; // cuz we have /g, we need to reset index in the loop
                if (options.extraRegex.test(wordCleaned)) {
                    // mark the word as a bad word
                    badWordsPos.push(i);
                }
            }
        }

        var hasBadwords = (badWordsPos.length > 0);
        if (hasBadwords) {
            if (options.isName) {
                wordsNew = ['Anonymous'];
            } else {
                // process bad words
                for (var i = 0; i < badWordsPos.length; i++) {
                    var badWordPos = badWordsPos[i];
                    var badWord = words[badWordPos];
                    var badWordNew = badWord;

                    if (options.replace) {
                        badWordNew = options.replacementsList[Math.floor(Math.random() * options.replacementsList.length)];
                    } else {
                        var strTmp = '';
                        for (var j = 0; j < badWord.length; j++) {
                            strTmp += options.obscureSymbol;
                        }
                        badWordNew = strTmp;
                    }

                    wordsNew[badWordPos] = badWordNew;
                }
            }
        }

        var strNew = wordsNew.join(' ');

        //console.log('str:'); console.log(str); console.log('strNew:'); console.log(strNew);

        return [strNew, hasBadwords];
    }

    return {
        purifyString: function(str, options) {
            options = options || {};
            return purifyString(str, options);
        },
        testString: function(str, options) {
            options = options || {};
            return testString(str, options);
        },
        processString: function(str, options) {
            options = options || {};
            return processString(str, options);
        },
        getListRegex: function(list) {
            return getListRegex(list);
        }
    }

})();