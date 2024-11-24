const a0_0x4c4b66 = a0_0x2136;
function a0_0x2136(_0xd527cd, _0xc3b79e) {
    const _0x4e10a2 = a0_0x4e10();
    return (
        (a0_0x2136 = function (_0x2136f0, _0x4129b0) {
            _0x2136f0 = _0x2136f0 - 0x1b4;
            let _0xabf26b = _0x4e10a2[_0x2136f0];
            return _0xabf26b;
        }),
        a0_0x2136(_0xd527cd, _0xc3b79e)
    );
}
function a0_0x4e10() {
    const _0x45a31b = [
        "16pAtevm",
        "33249210agcwvj",
        "SHK{g4x64_i3h0i3w}",
        "animate-pulse",
        "SHK{xbjijs}",
        "hidden",
        "match",
        "classList",
        "8BnWJrt",
        "SHK{1sxu3hy_3q3r3sy_uw0}",
        "parse",
        "contains",
        "hint",
        "getItem",
        "4DVMbsG",
        "style",
        "add",
        "toLowerCase",
        "getElementById",
        "push",
        "4857WRVibl",
        "1077197UbprIw",
        "translate-y-0",
        "completedChallenges",
        "textContent",
        "width",
        "setItem",
        "join",
        "DOMContentLoaded",
        "includes",
        "16350246DqBFqt",
        "progress-bar",
        "split",
        "🎉\x20Congratulations!\x20You\x27ve\x20completed\x20all\x20challenges!",
        "length",
        "querySelector",
        "[data-challenge=\x22",
        "charCodeAt",
        "fromCharCode",
        "progress-text",
        "9692862aMOvBx",
        "min",
        "2911657wtrXTu",
        "forEach",
        "7422595qXkYtU",
        "remove",
    ];
    a0_0x4e10 = function () {
        return _0x45a31b;
    };
    return a0_0x4e10();
}
(function (_0x4066c5, _0x61d839) {
    const _0x17f0ba = a0_0x2136,
        _0x3434ad = _0x4066c5();
    while (!![]) {
        try {
            const _0xa28467 =
                -parseInt(_0x17f0ba(0x1cd)) / 0x1 +
                (parseInt(_0x17f0ba(0x1b8)) / 0x2) *
                    (parseInt(_0x17f0ba(0x1cc)) / 0x3) +
                (-parseInt(_0x17f0ba(0x1c6)) / 0x4) *
                    (parseInt(_0x17f0ba(0x1b6)) / 0x5) +
                parseInt(_0x17f0ba(0x1e0)) / 0x6 +
                (parseInt(_0x17f0ba(0x1b4)) / 0x7) *
                    (parseInt(_0x17f0ba(0x1c0)) / 0x8) +
                -parseInt(_0x17f0ba(0x1d6)) / 0x9 +
                parseInt(_0x17f0ba(0x1b9)) / 0xa;
            if (_0xa28467 === _0x61d839) break;
            else _0x3434ad["push"](_0x3434ad["shift"]());
        } catch (_0x2f61ef) {
            _0x3434ad["push"](_0x3434ad["shift"]());
        }
    }
})(a0_0x4e10, 0xf1eab);
let completedChallenges =
    JSON[a0_0x4c4b66(0x1c2)](
        localStorage[a0_0x4c4b66(0x1c5)]("completedChallenges")
    ) || [];
function decrypt(_0x1f5727) {
    const _0x1ba322 = a0_0x4c4b66;
    return _0x1f5727[_0x1ba322(0x1d8)]("")
        ["map"]((_0x20d038) => {
            const _0x292cc0 = _0x1ba322;
            if (_0x20d038[_0x292cc0(0x1be)](/[A-Za-z]/)) {
                const _0x53b0db =
                    _0x20d038[_0x292cc0(0x1dd)](0x0) < 0x61 ? 0x41 : 0x61;
                return String[_0x292cc0(0x1de)](
                    ((_0x20d038[_0x292cc0(0x1dd)](0x0) -
                        _0x53b0db -
                        0x5 +
                        0x1a) %
                        0x1a) +
                        _0x53b0db
                );
            }
            return _0x20d038;
        })
        [_0x1ba322(0x1d3)]("");
}
function checkFlag(_0x492bac, _0x54d721) {
    const _0x243b4f = a0_0x4c4b66,
        _0xcb0845 = {
            challenge1: _0x243b4f(0x1c1),
            challenge2: "SHK{h0sx0q3_r4xy3w_2024}",
            challenge3: "SHK{h00p13_r0sxy3w}",
            challenge4: "SHK{xbjijs}",
            challenge5: _0x243b4f(0x1bc),
            challenge6: _0x243b4f(0x1ba),
        },
        _0xd84d11 = decrypt(_0xcb0845[_0x492bac]);
    return _0xd84d11[_0x243b4f(0x1c9)]() === _0x54d721[_0x243b4f(0x1c9)]();
}
function updateCompletedChallenges() {
    const _0x4c4b16 = a0_0x4c4b66;
    completedChallenges[_0x4c4b16(0x1b5)]((_0x2faca3) => {
        const _0xe9aa6b = _0x4c4b16,
            _0x165ada = document[_0xe9aa6b(0x1db)](
                _0xe9aa6b(0x1dc) + _0x2faca3 + "\x22]"
            );
        _0x165ada &&
            _0x165ada[_0xe9aa6b(0x1bf)][_0xe9aa6b(0x1c8)]("challenge-solved");
    });
    const _0x202995 = document[_0x4c4b16(0x1ca)](_0x4c4b16(0x1d7)),
        _0x49d6e3 = document["getElementById"](_0x4c4b16(0x1df));
    if (_0x202995 && _0x49d6e3) {
        const _0x799b4b = 0x6,
            _0x129642 = Math["min"](
                completedChallenges[_0x4c4b16(0x1da)],
                _0x799b4b
            ),
            _0x1620e0 = (_0x129642 / _0x799b4b) * 0x64;
        (_0x202995[_0x4c4b16(0x1c7)][_0x4c4b16(0x1d1)] =
            Math[_0x4c4b16(0x1e1)](_0x1620e0, 0x64) + "%"),
            (_0x49d6e3[_0x4c4b16(0x1d0)] = _0x129642 + "/" + _0x799b4b),
            _0x129642 === _0x799b4b &&
                (_0x202995[_0x4c4b16(0x1bf)]["add"](_0x4c4b16(0x1bb)),
                showNotification("success", _0x4c4b16(0x1d9)));
    }
}
document["addEventListener"](a0_0x4c4b66(0x1d4), () => {
    updateCompletedChallenges();
});
function updateProgress(_0x2b5d3a) {
    const _0x4344a8 = a0_0x4c4b66;
    !completedChallenges[_0x4344a8(0x1d5)](_0x2b5d3a) &&
        (completedChallenges[_0x4344a8(0x1cb)](_0x2b5d3a),
        localStorage[_0x4344a8(0x1d2)](
            _0x4344a8(0x1cf),
            JSON["stringify"](completedChallenges)
        ),
        updateCompletedChallenges());
}
function toggleHint() {
    const _0x27ce08 = a0_0x4c4b66,
        _0xf8c35 = document[_0x27ce08(0x1ca)](_0x27ce08(0x1c4));
    _0xf8c35[_0x27ce08(0x1bf)][_0x27ce08(0x1c3)](_0x27ce08(0x1bd))
        ? (_0xf8c35[_0x27ce08(0x1bf)][_0x27ce08(0x1b7)](_0x27ce08(0x1bd)),
          _0xf8c35["classList"][_0x27ce08(0x1c8)](
              "opacity-100",
              _0x27ce08(0x1ce)
          ))
        : (_0xf8c35["classList"][_0x27ce08(0x1c8)](_0x27ce08(0x1bd)),
          _0xf8c35[_0x27ce08(0x1bf)][_0x27ce08(0x1b7)](
              "opacity-100",
              _0x27ce08(0x1ce)
          ));
}
