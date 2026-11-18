/*! 中文手写字型授权
Copyright 2021-2026 LXGW (https://github.com/lxgw/LxgwWenKai), with Reserved Font Name '霞鹜', '霞鶩', '落霞孤鹜', '落霞孤鶩' and 'LXGW'. [ADDITIONAL PERMISSION] The Reserved Font Names '霞鹜', '霞鶩', '落霞孤鹜', '落霞孤鶩' and 'LXGW' may continue to be used in Modified Versions recompiled from the Original Version, without modifications to the font source code; or in Modified Versions subsetted or converted to other formats (e.g., WOFF/WOFF2) solely for web font delivery, provided such Modified Versions are not made available as installable desktop fonts (e.g., on mainstream platforms like Google Fonts, or third-party non-commercial platforms recognized by the author @lxgw; other web font platforms please contact the author @lxgw for confirmation).
Copyright 2020 The Klee Project Authors (https://github.com/fontworks-fonts/Klee)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.

*/

(() => {
"use strict";

const config = {
  "version": "1.0.0",
  "product": "灵魂原像",
  "outcomes": [
    {
      "id": 1,
      "key": "fountain",
      "name": "喷泉",
      "symbolism": "丰沛／释放／循环",
      "base_offset": -0.25,
      "tie_epsilon": 0,
      "image_filename": "01-fountain.png"
    },
    {
      "id": 2,
      "key": "sword",
      "name": "剑",
      "symbolism": "边界／决断／锋芒",
      "base_offset": 0.75,
      "tie_epsilon": 0.00001,
      "image_filename": "02-sword.png"
    },
    {
      "id": 3,
      "key": "statue",
      "name": "石像",
      "symbolism": "沉默／记忆／坚守",
      "base_offset": 1.5,
      "tie_epsilon": 0.00002,
      "image_filename": "03-statue.png"
    },
    {
      "id": 4,
      "key": "feather",
      "name": "羽毛",
      "symbolism": "轻盈／感知／随风",
      "base_offset": 0,
      "tie_epsilon": 0.00003,
      "image_filename": "04-feather.png"
    },
    {
      "id": 5,
      "key": "conch",
      "name": "海螺",
      "symbolism": "内省／回响／收藏",
      "base_offset": 0.5,
      "tie_epsilon": 0.00004,
      "image_filename": "05-conch.png"
    },
    {
      "id": 6,
      "key": "carousel",
      "name": "旋转木马",
      "symbolism": "童心／怀旧／循环",
      "base_offset": 0.25,
      "tie_epsilon": 0.00005,
      "image_filename": "06-carousel.png"
    },
    {
      "id": 7,
      "key": "door",
      "name": "门",
      "symbolism": "可能／阈限／转变",
      "base_offset": 0.75,
      "tie_epsilon": 0.00006,
      "image_filename": "07-door.png"
    },
    {
      "id": 8,
      "key": "mountain",
      "name": "山",
      "symbolism": "独立／稳定／辽阔",
      "base_offset": 1.25,
      "tie_epsilon": 0.00007,
      "image_filename": "08-mountain.png"
    },
    {
      "id": 9,
      "key": "candle",
      "name": "蜡烛",
      "symbolism": "温度／奉献／消耗",
      "base_offset": -0.75,
      "tie_epsilon": 0.00008,
      "image_filename": "09-candle.png"
    },
    {
      "id": 10,
      "key": "lighthouse",
      "name": "灯塔",
      "symbolism": "守望／方向／坚持",
      "base_offset": 0.25,
      "tie_epsilon": 0.00009,
      "image_filename": "10-lighthouse.png"
    },
    {
      "id": 11,
      "key": "book",
      "name": "书",
      "symbolism": "理解／记录／探索",
      "base_offset": 0.5,
      "tie_epsilon": 0.0001,
      "image_filename": "11-book.png"
    },
    {
      "id": 12,
      "key": "lake",
      "name": "湖泊",
      "symbolism": "容纳／平静／深邃",
      "base_offset": -0.25,
      "tie_epsilon": 0.00011,
      "image_filename": "12-lake.png"
    },
    {
      "id": 13,
      "key": "sofa",
      "name": "沙发",
      "symbolism": "松弛／依靠／安稳",
      "base_offset": 0.25,
      "tie_epsilon": 0.00012,
      "image_filename": "13-sofa.png"
    },
    {
      "id": 14,
      "key": "tree",
      "name": "树",
      "symbolism": "生长／韧性／连接",
      "base_offset": 0,
      "tie_epsilon": 0.00013,
      "image_filename": "14-tree.png"
    },
    {
      "id": 15,
      "key": "slide",
      "name": "滑梯",
      "symbolism": "游戏／冒险／释放",
      "base_offset": -0.5,
      "tie_epsilon": 0.00014,
      "image_filename": "15-slide.png"
    },
    {
      "id": 16,
      "key": "bird",
      "name": "鸟",
      "symbolism": "自主／远方／迁徙",
      "base_offset": 0,
      "tie_epsilon": 0.00015,
      "image_filename": "16-bird.png"
    }
  ],
  "questions": [
    {
      "id": 1,
      "title": "意识的排列方式",
      "prompt": "如果你走进自己的意识深处，那些尚未说出口的念头，会以怎样的方式存在？",
      "options": [
        {
          "code": "A",
          "text": "秩序的",
          "weights": {
            "剑": 5,
            "石像": 2,
            "海螺": 2,
            "旋转木马": 5,
            "门": 5,
            "山": 2,
            "蜡烛": 5,
            "灯塔": 2,
            "书": 5,
            "湖泊": 2,
            "沙发": 5
          }
        },
        {
          "code": "B",
          "text": "飘在空中",
          "weights": {
            "羽毛": 5,
            "湖泊": 5,
            "滑梯": 2,
            "鸟": 5
          }
        },
        {
          "code": "C",
          "text": "向上叠放",
          "weights": {
            "喷泉": 5,
            "剑": 2,
            "石像": 5,
            "海螺": 5,
            "旋转木马": 2,
            "山": 5,
            "蜡烛": 2,
            "灯塔": 5,
            "书": 2,
            "树": 5
          }
        },
        {
          "code": "D",
          "text": "散落四周",
          "weights": {
            "喷泉": 2,
            "羽毛": 2,
            "门": 2,
            "沙发": 2,
            "树": 2,
            "滑梯": 5,
            "鸟": 2
          }
        }
      ]
    },
    {
      "id": 3,
      "title": "内在的防御",
      "prompt": "如果你必须用一种东西守护精神世界的边界，你会选择什么？",
      "options": [
        {
          "code": "A",
          "text": "蛛网",
          "weights": {
            "喷泉": 5,
            "羽毛": 5,
            "海螺": 2,
            "旋转木马": 5,
            "书": 5,
            "湖泊": 5,
            "沙发": 2,
            "树": 5,
            "鸟": 2
          }
        },
        {
          "code": "B",
          "text": "利刃",
          "weights": {
            "剑": 5,
            "石像": 2,
            "羽毛": 2,
            "门": 5,
            "山": 2,
            "蜡烛": 2,
            "灯塔": 2,
            "滑梯": 5,
            "鸟": 5
          }
        },
        {
          "code": "C",
          "text": "巨石",
          "weights": {
            "石像": 5,
            "海螺": 5,
            "门": 2,
            "山": 5,
            "书": 2,
            "湖泊": 2,
            "沙发": 5,
            "树": 2
          }
        },
        {
          "code": "D",
          "text": "火焰",
          "weights": {
            "喷泉": 2,
            "剑": 2,
            "旋转木马": 2,
            "蜡烛": 5,
            "灯塔": 5,
            "滑梯": 2
          }
        }
      ]
    },
    {
      "id": 4,
      "title": "灵魂的质地",
      "prompt": "假如别人无法看见你的身体，只能触碰到你的精神，你希望自己呈现出怎样的质地？",
      "options": [
        {
          "code": "A",
          "text": "柔软的",
          "weights": {
            "喷泉": 5,
            "羽毛": 2,
            "旋转木马": 2,
            "门": 2,
            "蜡烛": 2,
            "灯塔": 2,
            "湖泊": 5,
            "鸟": 2
          },
          "art": "q04_a.webp"
        },
        {
          "code": "B",
          "text": "尖锐的",
          "weights": {
            "羽毛": 5,
            "山": 2,
            "蜡烛": 5,
            "湖泊": 2,
            "沙发": 2,
            "树": 2,
            "滑梯": 2
          },
          "art": "q04_b.webp"
        },
        {
          "code": "C",
          "text": "冰凉的",
          "weights": {
            "剑": 2,
            "石像": 5,
            "海螺": 5,
            "山": 5,
            "书": 5,
            "树": 5
          },
          "art": "q04_c.webp"
        },
        {
          "code": "D",
          "text": "粘稠的",
          "weights": {
            "喷泉": 2,
            "剑": 5,
            "石像": 2,
            "海螺": 2,
            "旋转木马": 5,
            "门": 5,
            "灯塔": 5,
            "书": 2,
            "沙发": 5,
            "滑梯": 5,
            "鸟": 5
          },
          "art": "q04_d.webp"
        }
      ]
    },
    {
      "id": 5,
      "title": "情绪的化身",
      "prompt": "如果你心里最深处的一种情绪终于挣脱出来，它会变成什么？",
      "options": [
        {
          "code": "A",
          "text": "泪",
          "weights": {
            "喷泉": 5,
            "石像": 2,
            "海螺": 2,
            "旋转木马": 2,
            "蜡烛": 5,
            "书": 2,
            "湖泊": 2,
            "沙发": 5
          }
        },
        {
          "code": "B",
          "text": "雾气",
          "weights": {
            "羽毛": 2,
            "海螺": 5,
            "门": 2,
            "山": 2,
            "蜡烛": 2,
            "灯塔": 2,
            "书": 5,
            "湖泊": 5,
            "沙发": 2,
            "鸟": 2
          }
        },
        {
          "code": "C",
          "text": "风",
          "weights": {
            "喷泉": 2,
            "剑": 2,
            "羽毛": 5,
            "旋转木马": 5,
            "门": 5,
            "灯塔": 5,
            "树": 2,
            "滑梯": 5,
            "鸟": 5
          }
        },
        {
          "code": "D",
          "text": "荆棘",
          "weights": {
            "剑": 5,
            "石像": 5,
            "山": 5,
            "树": 5,
            "滑梯": 2
          }
        }
      ]
    },
    {
      "id": 6,
      "title": "梦境中的同行者",
      "prompt": "在一场漫长而没有终点的梦里，有一个生物始终陪伴着你。它是什么？",
      "options": [
        {
          "code": "A",
          "text": "粉色海豚",
          "weights": {
            "喷泉": 5,
            "羽毛": 5,
            "海螺": 2,
            "旋转木马": 5,
            "蜡烛": 2,
            "湖泊": 5,
            "滑梯": 2,
            "鸟": 2
          }
        },
        {
          "code": "B",
          "text": "蓝色大象",
          "weights": {
            "石像": 5,
            "海螺": 5,
            "山": 5,
            "灯塔": 2,
            "书": 5,
            "湖泊": 2,
            "沙发": 5,
            "树": 5
          }
        },
        {
          "code": "C",
          "text": "红色的狗",
          "weights": {
            "喷泉": 2,
            "剑": 5,
            "旋转木马": 2,
            "门": 2,
            "蜡烛": 5,
            "沙发": 2,
            "树": 2,
            "滑梯": 5
          }
        },
        {
          "code": "D",
          "text": "黑色的马",
          "weights": {
            "剑": 2,
            "石像": 2,
            "羽毛": 2,
            "门": 5,
            "山": 2,
            "灯塔": 5,
            "书": 2,
            "鸟": 5
          }
        }
      ]
    },
    {
      "id": 7,
      "title": "被遗留的事物",
      "prompt": "世界安静下来之后，你走进一间空房子，里面只剩下四样东西。你只能带走一样，你会拿走什么？",
      "options": [
        {
          "code": "A",
          "text": "绿色格子毯子",
          "weights": {
            "石像": 2,
            "羽毛": 2,
            "旋转木马": 5,
            "山": 5,
            "沙发": 2,
            "树": 5,
            "滑梯": 2,
            "鸟": 2
          }
        },
        {
          "code": "B",
          "text": "白色的枕头",
          "weights": {
            "喷泉": 2,
            "石像": 5,
            "羽毛": 5,
            "旋转木马": 2,
            "山": 2,
            "蜡烛": 2,
            "湖泊": 5,
            "沙发": 5,
            "树": 2
          }
        },
        {
          "code": "C",
          "text": "蓝色的马克杯",
          "weights": {
            "喷泉": 5,
            "剑": 2,
            "海螺": 5,
            "门": 2,
            "蜡烛": 5,
            "灯塔": 2,
            "书": 2,
            "湖泊": 2,
            "滑梯": 5
          }
        },
        {
          "code": "D",
          "text": "银质放大镜",
          "weights": {
            "剑": 5,
            "海螺": 2,
            "门": 5,
            "灯塔": 5,
            "书": 5,
            "鸟": 5
          }
        }
      ]
    },
    {
      "id": 8,
      "title": "存在的方式",
      "prompt": "如果有一天，你不再以“人”的身份存在，而只是留在世界某个角落的一部分，你更愿意成为什么？",
      "options": [
        {
          "code": "A",
          "text": "江",
          "weights": {
            "喷泉": 5,
            "海螺": 2,
            "旋转木马": 5,
            "门": 2,
            "灯塔": 2,
            "湖泊": 2,
            "滑梯": 5
          }
        },
        {
          "code": "B",
          "text": "岸",
          "weights": {
            "剑": 5,
            "石像": 5,
            "海螺": 5,
            "门": 5,
            "山": 5,
            "蜡烛": 2,
            "灯塔": 5,
            "书": 2,
            "沙发": 5,
            "树": 2
          }
        },
        {
          "code": "C",
          "text": "芦苇",
          "weights": {
            "剑": 2,
            "石像": 2,
            "羽毛": 2,
            "山": 2,
            "蜡烛": 5,
            "书": 5,
            "树": 5,
            "鸟": 2
          }
        },
        {
          "code": "D",
          "text": "浮萍",
          "weights": {
            "喷泉": 2,
            "羽毛": 5,
            "旋转木马": 2,
            "湖泊": 5,
            "沙发": 2,
            "滑梯": 2,
            "鸟": 5
          }
        }
      ]
    },
    {
      "id": 9,
      "title": "精神的原始形态",
      "prompt": "如果你的精神是一件尚未完成的造物，在它拥有颜色、温度和记忆之前，你觉得它最初是什么模样？",
      "options": [
        {
          "code": "A",
          "text": "戒指",
          "weights": {
            "喷泉": 5,
            "剑": 2,
            "羽毛": 2,
            "海螺": 2,
            "旋转木马": 5,
            "门": 2,
            "蜡烛": 2,
            "灯塔": 2,
            "书": 2,
            "湖泊": 2,
            "鸟": 5
          }
        },
        {
          "code": "B",
          "text": "雪球",
          "weights": {
            "石像": 5,
            "羽毛": 5,
            "山": 5,
            "蜡烛": 5,
            "湖泊": 5,
            "沙发": 2
          }
        },
        {
          "code": "C",
          "text": "螺旋楼梯",
          "weights": {
            "喷泉": 2,
            "海螺": 5,
            "旋转木马": 2,
            "灯塔": 5,
            "树": 5,
            "滑梯": 5,
            "鸟": 2
          }
        },
        {
          "code": "D",
          "text": "拼图",
          "weights": {
            "剑": 5,
            "石像": 2,
            "门": 5,
            "山": 2,
            "书": 5,
            "沙发": 5,
            "树": 2,
            "滑梯": 2
          }
        }
      ]
    }
  ],
  "engine": {
    "model": "灵魂原像匹配模型 V1.0",
    "rule": "每题每精神体强关联5分、次关联2分、无关联0分；各结果累计8题的选项得分，叠加小幅校准值，按总分选取最高者",
    "tie_breaker": "得分完全一致时使用固定精度优先级 index*0.00001，保证同样答案始终得到同样结果",
    "not_psychometric": "此规则是艺术意象映射，并非医学、心理测量或科学人格诊断。",
    "calibration": "沿用原题库的校准值。本版穷举 65,536 种答题组合。等概率分布不代表真实用户行为。",
    "calibration_seed": 5116,
    "validation_n": 65536,
    "scoring": {
      "primary": 5,
      "secondary": 2,
      "neutral": 0
    }
  },
  "validation": {
    "uniform_random_counts": {
      "喷泉": 3882,
      "剑": 3996,
      "石像": 4500,
      "羽毛": 4222,
      "海螺": 4015,
      "旋转木马": 3963,
      "门": 3957,
      "山": 3903,
      "蜡烛": 4152,
      "灯塔": 3844,
      "书": 4426,
      "湖泊": 3979,
      "沙发": 4022,
      "树": 3849,
      "滑梯": 4323,
      "鸟": 4503
    },
    "min_pct": 5.865,
    "max_pct": 6.871,
    "all_16_signature_cases_correct": true,
    "close_margin_below_1_percentage": 27.768
  },
  "signature_tests": [
    {
      "expected": "喷泉",
      "answers": [
        "C",
        "A",
        "A",
        "A",
        "A",
        "C",
        "A",
        "A"
      ]
    },
    {
      "expected": "剑",
      "answers": [
        "A",
        "B",
        "D",
        "D",
        "C",
        "D",
        "B",
        "D"
      ]
    },
    {
      "expected": "石像",
      "answers": [
        "C",
        "C",
        "C",
        "D",
        "B",
        "B",
        "B",
        "B"
      ]
    },
    {
      "expected": "羽毛",
      "answers": [
        "B",
        "A",
        "B",
        "C",
        "A",
        "B",
        "D",
        "B"
      ]
    },
    {
      "expected": "海螺",
      "answers": [
        "C",
        "C",
        "C",
        "B",
        "B",
        "C",
        "B",
        "C"
      ]
    },
    {
      "expected": "旋转木马",
      "answers": [
        "A",
        "A",
        "D",
        "C",
        "A",
        "A",
        "A",
        "A"
      ]
    },
    {
      "expected": "门",
      "answers": [
        "A",
        "B",
        "D",
        "C",
        "D",
        "D",
        "B",
        "D"
      ]
    },
    {
      "expected": "山",
      "answers": [
        "C",
        "C",
        "C",
        "D",
        "B",
        "A",
        "B",
        "B"
      ]
    },
    {
      "expected": "蜡烛",
      "answers": [
        "A",
        "D",
        "B",
        "A",
        "C",
        "C",
        "C",
        "B"
      ]
    },
    {
      "expected": "灯塔",
      "answers": [
        "C",
        "D",
        "D",
        "C",
        "D",
        "D",
        "B",
        "C"
      ]
    },
    {
      "expected": "书",
      "answers": [
        "A",
        "A",
        "C",
        "B",
        "B",
        "D",
        "C",
        "D"
      ]
    },
    {
      "expected": "湖泊",
      "answers": [
        "B",
        "A",
        "A",
        "B",
        "A",
        "B",
        "D",
        "B"
      ]
    },
    {
      "expected": "沙发",
      "answers": [
        "A",
        "C",
        "D",
        "A",
        "B",
        "B",
        "B",
        "D"
      ]
    },
    {
      "expected": "树",
      "answers": [
        "C",
        "A",
        "C",
        "D",
        "B",
        "A",
        "C",
        "C"
      ]
    },
    {
      "expected": "滑梯",
      "answers": [
        "D",
        "B",
        "D",
        "C",
        "C",
        "C",
        "A",
        "C"
      ]
    },
    {
      "expected": "鸟",
      "answers": [
        "B",
        "B",
        "D",
        "C",
        "D",
        "D",
        "D",
        "A"
      ]
    }
  ]
};

const cards = {
  "1": {
    "id": 1,
    "title": "星屑喷泉",
    "poem": "即使群星停止闪烁，我仍向寂静的夜空，归还光芒。",
    "file": "01_fountain_card.webp",
    "reading": "你的精神像一座永不枯竭的喷泉，总有一些细腻的情感与奇妙的想象，从内心深处不断涌现。你或许比自己意识到的更加敏感，容易被微小的美好打动，也愿意将温柔分享给身边的人。情绪的表达与流动，是你理解世界的一种方式。但你不必时刻保持丰沛，也不需要永远成为照亮别人的那束光。允许自己偶尔沉寂，允许情绪慢慢沉淀。你要记得，喷泉即使停止喷涌，泉水也依然存在。你的价值，从来不取决于你给予了多少。"
  },
  "2": {
    "id": 2,
    "title": "无声之刃",
    "poem": "因为锋利，所以无需发出声响。",
    "file": "02_blade_card.webp",
    "reading": "你的内心或许有一条清晰的界限，知道什么值得珍惜，也知道什么不必挽留。你不一定喜欢争执，却可能在重要的时刻表现出惊人的坚定。心理上的边界感，并不意味着冷漠，而是一种尊重自己与他人的能力。只是偶尔，你也可以允许自己不那么坚强，不必每一次都独自作出正确的决定。锋利并不等于必须战斗，真正的力量，也包括放下防备的勇气。愿你拥有保护自己的锋芒，也拥有安心柔软的自由。"
  },
  "3": {
    "id": 3,
    "title": "沉眠石像",
    "poem": "我把所有未曾说出口的话，交给了漫长的风化。",
    "file": "03_statue_card.webp",
    "reading": "你或许习惯把很多事情放在心里，用沉默消化那些难以言说的感受。在别人眼中，你可能平静而稳定，仿佛很少有什么能够真正撼动你。但沉默不代表没有情绪，坚强也不意味着不会疲惫。有些感受只是需要更长的时间，才能找到合适的出口。你不必急着释怀，也不需要把所有经历都变成成长的证明。石像会被岁月留下痕迹，却不会因此失去美丽。那些曾经让你疼痛的时刻，也是你生命真实存在过的证据。"
  },
  "4": {
    "id": 4,
    "title": "风的遗羽",
    "poem": "我不属于任何一双翅膀，只属于风经过的地方。",
    "file": "04_feather_card.webp",
    "reading": "你似乎更愿意感受世界，而不是急着为自己寻找一个固定的位置。你可能对变化有着天然的好奇，也容易被偶然出现的风景、情绪或念头吸引。在心理层面，能够接纳不确定性，本身就是一种珍贵的适应能力。但自由并不意味着必须永远漂泊，偶尔想要依靠、想要安定，也不会让你失去轻盈。你可以随风去往陌生的地方，也可以选择停在一扇温暖的窗前。真正的自由，不是永远没有归处，而是你有权决定在哪里停留。"
  },
  "5": {
    "id": 5,
    "title": "月蚀海螺",
    "poem": "潮汐退去以后，我仍替大海收藏着它的心跳。",
    "file": "05_conch_card.webp",
    "reading": "你可能拥有一个丰富而隐秘的内在世界。许多别人转身便忘记的瞬间，你却会在心里保存很久。一句话、一段旋律，甚至某个寻常的黄昏，都可能成为你记忆深处的回声。这种细腻的感受力，让你能够察觉生活中不易被发现的美好，但也可能让一些遗憾停留得更久。请记得，珍惜过去不意味着必须永远背负过去。海螺收藏了大海的声音，却不需要留住每一场潮汐。你可以怀念，也可以继续向前。"
  },
  "6": {
    "id": 6,
    "title": "月夜木马",
    "poem": "我们绕着同一个月亮旋转，却一次次抵达不同的梦。",
    "file": "06_carousel_card.webp",
    "reading": "你的心里或许始终保留着一小块不愿长大的地方。你珍惜熟悉的事物，也可能对某些旧日时光怀有特别的感情。在心理学中，熟悉感常常能够带来安全与安慰，但你并不一定是在抗拒改变，只是希望在不断向前的生活里，保留一些值得反复回望的美好。人生有时像旋转木马，看似回到原点，其实每一次经过，你都已经拥有了不同的心境。愿你不必为了证明成熟而告别童真，也不必为了留住回忆而拒绝新的故事。"
  },
  "7": {
    "id": 7,
    "title": "第十三扇门",
    "poem": "当所有道路都指向终点，我偏要推开不存在的门。",
    "file": "07_door_card.webp",
    "reading": "你可能天生对既定的答案抱有一点怀疑。比起沿着别人规划好的道路前进，你更愿意亲自确认，世界是否还有另一种可能。这种探索欲让你保持独立，也让你在面对未知时拥有重新选择的勇气。但不断寻找出口，有时也会让人忘记欣赏已经抵达的地方。你不必时时刻刻突破自己，也不需要证明每一次选择都与众不同。门的意义不只在于通向远方，也在于允许你决定何时打开、何时关上。属于你的世界，不必得到所有人的认可。"
  },
  "8": {
    "id": 8,
    "title": "倒悬之山",
    "poem": "世界颠倒之时，我依然知道根的朝向。",
    "file": "08_inverted_mountain_card.webp",
    "reading": "你或许拥有一套不轻易动摇的内在价值观。即使周围的人不断改变方向，你也倾向于先确认什么对自己真正重要。在心理学中，稳定的自我认同能够帮助人们面对外界的不确定性。但坚定并不意味着永远正确，偶尔重新审视自己的信念，也不代表失去原则。山峰即使倒悬，依然拥有完整的轮廓。你不需要按照所有人的方向生长，也无需把不同的声音都当作威胁。愿你既有坚持自我的勇气，也有拥抱变化的从容。"
  },
  "9": {
    "id": 9,
    "title": "长明之烛",
    "poem": "不与黑夜争辩，只在它最深的地方永久的摇曳。",
    "file": "09_candle_card.webp",
    "reading": "你的力量或许并不张扬，而是藏在那些日复一日的坚持里。你可能擅长忍耐，也愿意为了珍视的人与事付出时间和精力。你知道有些改变无法一蹴而就，所以选择用自己的节奏慢慢靠近。但请不要把持续燃烧误认为存在的义务。心理上的韧性，不只是能够承受多少，也包括知道什么时候需要休息、什么时候可以向别人求助。蜡烛的光芒固然美丽，但你不必以耗尽自己为代价去照亮世界。愿你的温柔，也能留一部分给自己。"
  },
  "10": {
    "id": 10,
    "title": "雾海灯塔",
    "poem": "我从不追问远方是否有人，只负责让光穿过迷雾。",
    "file": "10_lighthouse_card.webp",
    "reading": "你或许是一个重视承诺与责任的人。面对混乱，你倾向于寻找方向；面对困境，你也愿意成为那个保持清醒的人。这样的稳定感容易让别人信任你，却也可能让你习惯独自承担太多。在关系中，可靠并不意味着永远不能示弱，照顾他人也不等于必须放弃自己的需要。灯塔始终站在海岸，但它并不负责替每一艘船完成航行。你可以给予方向，却不必承担所有人的命运。愿你在照亮远方的时候，也允许自己被温柔地看见。"
  },
  "11": {
    "id": 11,
    "title": "无字之书",
    "poem": "空白的每一页，写满了尚未发生之事。",
    "file": "11_blank_book_card.webp",
    "reading": "你可能比起确定的答案，更容易被尚未揭晓的可能性吸引。你喜欢思考，也愿意在不同的观点与经历之间寻找属于自己的理解。有时候，你会因为想得太多而犹豫，仿佛每一次选择都会关上一扇其他的门。但人生并不是一道必须提前求解的题目。允许自己不知道，允许故事暂时没有结局，也是面对未知的一种成熟。空白从来不代表匮乏，它意味着还有空间容纳意外、遗憾与惊喜。你不必急着成为完整的故事，你本来就拥有继续书写的权利。"
  },
  "12": {
    "id": 12,
    "title": "镜中湖泊",
    "poem": "我是地上的另一片天，接住了无数朵路过的云。",
    "file": "12_lake_in_hand_mirror_card.webp",
    "reading": "你的内心或许有着很强的感受与共情能力。你能够理解不同的情绪，也愿意为他人的故事留出空间。像一片安静的湖泊，你不急着评判，只是让经过的事物拥有片刻被接纳的可能。但当你习惯照顾所有人的感受，也可能渐渐忽略自己的波澜。共情是一种能力，而不是必须承受所有情绪的责任。湖面可以倒映整片天空，却不需要把每一朵云都留下。愿你在理解世界的同时，也能认真倾听自己的声音。你不仅是倒影的容器，也拥有属于自己的深度。"
  },
  "13": {
    "id": 13,
    "title": "落日沙发",
    "poem": "时间奔流向前，我为黄昏留下一处歇脚地。",
    "file": "13_sunset_sofa_card.webp",
    "reading": "你或许比许多人更懂得平凡时刻的珍贵。比起不断追逐新的目标，你也会向往一段没有安排的下午、一场缓慢的日落，或一个能够安心做自己的角落。在强调效率的世界里，停下来有时会让人产生莫名的愧疚，仿佛只有不断前进才值得被肯定。但休息不是对生活的逃避，享受当下也并非缺乏追求。你不必用忙碌证明存在，更不需要把每一分钟都变得有意义。愿你拥有一处柔软的精神居所，在那里，什么都不做，也是一种完整的生活。"
  },
  "14": {
    "id": 14,
    "title": "永生之树",
    "poem": "年轮替我记住时间，而枝叶替我一次次忘记。",
    "file": "14_eternal_tree_card.webp",
    "reading": "你的精神里或许同时存在着两种力量：一种渴望稳定，一种始终向往生长。你珍惜自己经历过的一切，也愿意在新的环境里慢慢寻找可能。在心理层面，成长并不总意味着推翻过去的自己，很多时候，它只是让原本的生命拥有更宽阔的空间。有些枝叶会枯萎，有些关系会远去，有些曾经坚信的事情也会改变，但这不意味着之前的努力毫无意义。树不会因为落叶而否定春天。愿你允许自己不断变化，也始终相信，每一个阶段的你，都值得被珍惜。"
  },
  "15": {
    "id": 15,
    "title": "月光滑梯",
    "poem": "我把重力当作邀请函，滑向月亮背面的秘密。",
    "file": "15_moon_slide_card.webp",
    "reading": "你的内心可能藏着一份不愿被现实驯服的好奇。你喜欢新鲜的体验，也愿意偶尔偏离熟悉的轨道，看看生活还能发生什么。心理学中的玩乐精神，不只属于童年，它也能够帮助成年人保持创造力与心理弹性。但你不必为了追求自由而不断冒险，也不需要每一天都活得精彩。快乐可以是一次大胆的尝试，也可以是一个毫不起眼的瞬间。愿你始终拥有对世界感到新奇的能力，并记得，人生不是只有抵达终点才值得庆祝，滑行的过程本身，就已经是一种礼物。"
  },
  "16": {
    "id": 16,
    "title": "夜航之鸟",
    "poem": "我不是为了抵达黎明才飞翔，而是黑夜也值得穿越。",
    "file": "16_night_bird_card.webp",
    "reading": "你或许有一种安静却强烈的自主意识。即使前方并不清晰，你仍愿意为自己选择的方向付出勇气。你明白成长无法完全避开孤独，也逐渐学会在不确定中寻找内心的支点。但独立不意味着必须独行，勇敢也不代表永远不会害怕。真正的自主，是你可以选择独自飞翔，也能够坦然接受同行者的陪伴。黑夜并不只是需要克服的障碍，它同样拥有值得欣赏的风景。愿你不再急着证明自己终会抵达何处，而是享受每一次自由振翅的瞬间。"
  }
};

const motions = {
  "1": {
    "kind": "layers",
    "left": 0,
    "top": 0,
    "width": 100,
    "height": 100,
    "layers": [
      {
        "file": "fountain_fog.webp",
        "box": [
          4,
          10,
          75,
          15
        ],
        "animation": "fountain-fog-drift",
        "duration": 14900,
        "delay": -3800
      },
      {
        "file": "fountain_fog.webp",
        "box": [
          22,
          20,
          77,
          14
        ],
        "animation": "fountain-fog-drift",
        "duration": 14900,
        "delay": -11250
      },
      {
        "file": "ink_01.webp",
        "box": [
          21.153846153846153,
          30,
          58.07692307692308,
          29
        ],
        "animation": "ink-loop",
        "duration": 8200,
        "frames": 32
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          17.95,
          46.0175,
          6.1,
          3.965
        ],
        "animation": "warm-halo-drift",
        "duration": 11200,
        "delay": -1700
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          28.2,
          50.18,
          5.6,
          3.6399999999999997
        ],
        "animation": "warm-halo-drift",
        "duration": 11200,
        "delay": -4900
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          36.7,
          55.505,
          4.6,
          2.9899999999999998
        ],
        "animation": "warm-halo-drift",
        "duration": 11200,
        "delay": -6200
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          60.45,
          50.3425,
          5.1,
          3.315
        ],
        "animation": "warm-halo-drift",
        "duration": 11200,
        "delay": -7200
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          70.75,
          46.8875,
          6.5,
          4.2250000000000005
        ],
        "animation": "warm-halo-drift",
        "duration": 11200,
        "delay": -3100
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          79.85,
          49.9525,
          6.3,
          4.095
        ],
        "animation": "warm-halo-drift",
        "duration": 11200,
        "delay": -8900
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          68.25,
          57.2125,
          5.5,
          3.575
        ],
        "animation": "warm-halo-drift",
        "duration": 11200,
        "delay": -10300
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          18.6,
          57.79,
          6.8,
          4.42
        ],
        "animation": "warm-halo-drift",
        "duration": 11200,
        "delay": -3700
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          84.3,
          60.245,
          5.4,
          3.5100000000000002
        ],
        "animation": "warm-halo-drift",
        "duration": 11200,
        "delay": -5400
      }
    ]
  },
  "2": {
    "kind": "layers",
    "left": 0,
    "top": 0,
    "width": 100,
    "height": 100,
    "layers": [
      {
        "file": "ocean_02.webp",
        "box": [
          3.6,
          40.7,
          92.8,
          40.3
        ],
        "animation": "ink-loop",
        "duration": 8900,
        "delay": -1602,
        "frames": 32
      },
      {
        "file": "ink_02.webp",
        "box": [
          38.84615384615385,
          29,
          23.076923076923077,
          29
        ],
        "animation": "ink-loop",
        "duration": 8900,
        "frames": 32
      }
    ]
  },
  "3": {
    "file": "ink_03.webp",
    "left": 26.923076923076923,
    "top": 27,
    "width": 48.07692307692308,
    "height": 31,
    "duration": 10400
  },
  "4": {
    "kind": "layers",
    "left": 0,
    "top": 0,
    "width": 100,
    "height": 100,
    "layers": [
      {
        "file": "feather_sky.webp",
        "box": [
          18.5,
          25,
          63,
          36
        ],
        "animation": "",
        "duration": 0
      },
      {
        "file": "floating_feather.webp",
        "box": [
          26,
          30.574883720930234,
          48,
          25.250232558139537
        ],
        "animation": "feather-drift",
        "duration": 13400
      }
    ]
  },
  "5": {
    "kind": "layers",
    "left": 0,
    "top": 0,
    "width": 100,
    "height": 100,
    "layers": [
      {
        "file": "ocean_05.webp",
        "box": [
          3.6,
          29.8,
          92.8,
          51.2
        ],
        "animation": "ink-loop",
        "duration": 8900,
        "delay": -1602,
        "frames": 32
      },
      {
        "file": "diamond_glint.webp",
        "box": [
          35.900000000000006,
          38.305,
          4.6,
          2.9899999999999998
        ],
        "animation": "diamond-breathe",
        "duration": 8400,
        "delay": -1200
      },
      {
        "file": "diamond_glint.webp",
        "box": [
          47.1,
          34.900000000000006,
          4,
          2.6
        ],
        "animation": "diamond-breathe",
        "duration": 9400,
        "delay": -4900
      },
      {
        "file": "diamond_glint.webp",
        "box": [
          61.95,
          37.9425,
          5.1,
          3.3149999999999995
        ],
        "animation": "diamond-breathe",
        "duration": 10800,
        "delay": -2700
      },
      {
        "file": "diamond_glint.webp",
        "box": [
          46.65,
          48.3625,
          3.5,
          2.275
        ],
        "animation": "diamond-breathe",
        "duration": 8900,
        "delay": -5600
      }
    ]
  },
  "6": {
    "file": "ink_06.webp",
    "kind": "carousel",
    "left": 26.923076923076923,
    "top": 30,
    "width": 46.15384615384615,
    "height": 29,
    "duration": 20000
  },
  "7": {
    "kind": "layers",
    "left": 0,
    "top": 0,
    "width": 100,
    "height": 100,
    "layers": [
      {
        "file": "firefly.webp",
        "box": [
          25,
          52,
          4.6,
          2.9899999999999998
        ],
        "animation": "firefly-wander",
        "duration": 14600,
        "delay": 0
      },
      {
        "file": "firefly.webp",
        "box": [
          31,
          44,
          3.8,
          2.4699999999999998
        ],
        "animation": "firefly-cross",
        "duration": 17000,
        "delay": -1777
      },
      {
        "file": "firefly.webp",
        "box": [
          62,
          47,
          4.8,
          3.1199999999999997
        ],
        "animation": "firefly-wander",
        "duration": 13200,
        "delay": -3554
      },
      {
        "file": "firefly.webp",
        "box": [
          73,
          42,
          3.6,
          2.3400000000000003
        ],
        "animation": "firefly-cross",
        "duration": 17800,
        "delay": -5331
      },
      {
        "file": "firefly.webp",
        "box": [
          71,
          55,
          4.5,
          2.925
        ],
        "animation": "firefly-wander",
        "duration": 15300,
        "delay": -7108
      },
      {
        "file": "firefly.webp",
        "box": [
          34,
          57,
          4.2,
          2.73
        ],
        "animation": "firefly-cross",
        "duration": 18400,
        "delay": -8885
      },
      {
        "file": "firefly.webp",
        "box": [
          80,
          51,
          3.7,
          2.4050000000000002
        ],
        "animation": "firefly-wander",
        "duration": 15900,
        "delay": -10662
      },
      {
        "file": "firefly.webp",
        "box": [
          22,
          48,
          3.1,
          2.015
        ],
        "animation": "firefly-cross",
        "duration": 16800,
        "delay": -12439
      }
    ]
  },
  "8": {
    "kind": "layers",
    "left": 0,
    "top": 0,
    "width": 100,
    "height": 100,
    "layers": [
      {
        "file": "mountain_clear_sky.webp",
        "box": [
          8.5,
          23.2,
          83,
          35.8
        ],
        "animation": "",
        "duration": 0
      },
      {
        "file": "floating_mountain.webp",
        "box": [
          14.4,
          28.6,
          71.2,
          26.4
        ],
        "animation": "mountain-suspension",
        "duration": 11400
      },
      {
        "file": "mountain_cloud.webp",
        "box": [
          5,
          53.5,
          75,
          12
        ],
        "animation": "mountain-mist",
        "duration": 11400,
        "delay": 0
      },
      {
        "file": "mountain_cloud.webp",
        "box": [
          23,
          64,
          74,
          15
        ],
        "animation": "mountain-mist",
        "duration": 11400,
        "delay": -3800
      },
      {
        "file": "mountain_cloud.webp",
        "box": [
          1,
          60.4,
          55,
          8
        ],
        "animation": "mountain-mist",
        "duration": 11400,
        "delay": -7600
      }
    ]
  },
  "9": {
    "kind": "layers",
    "left": 0,
    "top": 0,
    "width": 100,
    "height": 100,
    "layers": [
      {
        "file": "candle_wick.webp",
        "box": [
          42.8,
          31.9,
          14.1,
          8.8
        ],
        "animation": "",
        "duration": 0
      },
      {
        "file": "warm_flame.webp",
        "box": [
          46.68,
          33.56,
          6,
          4.05
        ],
        "animation": "flame-breath",
        "duration": 3860,
        "origin": [
          50,
          88
        ]
      },
      {
        "file": "candle_ember.svg",
        "box": [
          42.1,
          38.4,
          4.1,
          2.67
        ],
        "animation": "candle-ember-drift",
        "duration": 6200,
        "delay": -1650
      },
      {
        "file": "candle_ember.svg",
        "box": [
          53.6,
          37.5,
          3.6,
          2.34
        ],
        "animation": "candle-ember-drift",
        "duration": 5100,
        "delay": -3280
      },
      {
        "file": "candle_ember.svg",
        "box": [
          37.9,
          42.2,
          2.8,
          1.82
        ],
        "animation": "candle-ember-drift",
        "duration": 7200,
        "delay": -4710
      },
      {
        "file": "candle_ember.svg",
        "box": [
          57.6,
          43.1,
          3.1,
          2.02
        ],
        "animation": "candle-ember-drift",
        "duration": 7600,
        "delay": -2270
      },
      {
        "file": "candle_ember.svg",
        "box": [
          45.8,
          32.7,
          2.2,
          1.43
        ],
        "animation": "candle-ember-drift",
        "duration": 5500,
        "delay": -4160
      },
      {
        "file": "candle_ember.svg",
        "box": [
          54.6,
          31.3,
          2.4,
          1.56
        ],
        "animation": "candle-ember-drift",
        "duration": 6500,
        "delay": -2040
      }
    ]
  },
  "10": {
    "kind": "layers",
    "left": 0,
    "top": 0,
    "width": 100,
    "height": 100,
    "layers": [
      {
        "file": "ocean_10.webp",
        "box": [
          3.6,
          51.4,
          92.8,
          29.6
        ],
        "animation": "ink-loop",
        "duration": 8300,
        "delay": -1494,
        "frames": 32
      },
      {
        "file": "lighthouse_beam.webp",
        "box": [
          50.14,
          28.64,
          44,
          7.1
        ],
        "animation": "beacon-sweep",
        "duration": 16600,
        "origin": [
          0,
          50
        ]
      }
    ]
  },
  "11": {
    "kind": "layers",
    "left": 0,
    "top": 0,
    "width": 100,
    "height": 100,
    "layers": [
      {
        "file": "book_background.webp",
        "box": [
          13.862179,
          25.625,
          72.115385,
          31.5625
        ],
        "animation": "",
        "duration": 0
      },
      {
        "file": "book_floating.webp",
        "box": [
          20.432692,
          29.895833,
          59.054487,
          23.020833
        ],
        "animation": "",
        "duration": 0,
        "floating": true
      },
      {
        "file": "turning_page.webp",
        "box": [
          20,
          23,
          60,
          30
        ],
        "animation": "ink-loop",
        "duration": 6600,
        "delay": -1670,
        "frames": 32,
        "floating": true
      }
    ],
    "floatDuration": 6600
  },
  "12": {
    "kind": "layers",
    "left": 0,
    "top": 0,
    "width": 100,
    "height": 100,
    "layers": [
      {
        "file": "mirror_background.webp",
        "box": [
          25.641026,
          17.5,
          48.878205,
          49.270833
        ],
        "animation": "",
        "duration": 0
      },
      {
        "file": "mirror_floating.webp",
        "box": [
          25.43,
          13.23,
          49.3,
          57.81
        ],
        "animation": "",
        "duration": 0,
        "floating": true
      },
      {
        "file": "mirror_ripples.webp",
        "box": [
          29.51,
          18.09,
          41.07,
          34.16
        ],
        "animation": "mirror-water",
        "duration": 5300,
        "clip": "ellipse",
        "floating": true
      },
      {
        "file": "mirror_ripples.webp",
        "box": [
          29.51,
          18.09,
          41.07,
          34.16
        ],
        "animation": "mirror-water",
        "duration": 5300,
        "clip": "ellipse",
        "delay": -2650,
        "floating": true
      }
    ],
    "floatDuration": 4600
  },
  "13": {
    "kind": "layers",
    "left": 0,
    "top": 0,
    "width": 100,
    "height": 100,
    "layers": [
      {
        "file": "sunset_cloud.webp",
        "box": [
          10,
          17.6,
          67,
          11
        ],
        "animation": "sunset-cloud-drift",
        "duration": 21200
      },
      {
        "file": "violet_cloud.webp",
        "box": [
          31,
          10.7,
          66,
          12.5
        ],
        "animation": "sunset-cloud-drift",
        "duration": 24600,
        "delay": -13200
      },
      {
        "file": "sunset_cloud.webp",
        "box": [
          4,
          23,
          50,
          7.3
        ],
        "animation": "sunset-cloud-drift",
        "duration": 18700,
        "delay": -6800
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          15,
          44.5,
          4.6,
          2.9899999999999998
        ],
        "animation": "warm-halo-drift",
        "duration": 8200,
        "delay": -650
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          22,
          38.4,
          3.3,
          2.145
        ],
        "animation": "warm-halo-drift",
        "duration": 9600,
        "delay": -1563
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          31,
          33,
          3.7,
          2.4050000000000002
        ],
        "animation": "warm-halo-drift",
        "duration": 10700,
        "delay": -2476
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          67,
          34.7,
          4.3,
          2.795
        ],
        "animation": "warm-halo-drift",
        "duration": 11200,
        "delay": -3389
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          77,
          43.6,
          5.4,
          3.5100000000000002
        ],
        "animation": "warm-halo-drift",
        "duration": 8200,
        "delay": -4302
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          82,
          47.9,
          4.4,
          2.8600000000000003
        ],
        "animation": "warm-halo-drift",
        "duration": 9600,
        "delay": -5215
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          67,
          54.6,
          3.8,
          2.4699999999999998
        ],
        "animation": "warm-halo-drift",
        "duration": 10700,
        "delay": -6128
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          21,
          54.2,
          4.5,
          2.9250000000000003
        ],
        "animation": "warm-halo-drift",
        "duration": 11200,
        "delay": -7041
      },
      {
        "file": "firefly_halo.webp",
        "box": [
          37,
          53.6,
          3.1,
          2.015
        ],
        "animation": "warm-halo-drift",
        "duration": 8200,
        "delay": -7954
      }
    ]
  },
  "14": {
    "kind": "layers",
    "left": 0,
    "top": 0,
    "width": 100,
    "height": 100,
    "layers": [
      {
        "file": "crystal_leaf.webp",
        "box": [
          30.4,
          41.5,
          3.1,
          2.604
        ],
        "animation": "falling-leaf",
        "duration": 13200,
        "delay": 0
      },
      {
        "file": "crystal_leaf.webp",
        "box": [
          39.8,
          39.2,
          2.8,
          2.352
        ],
        "animation": "falling-leaf",
        "duration": 14700,
        "delay": -1950
      },
      {
        "file": "crystal_leaf.webp",
        "box": [
          63.7,
          39.4,
          3.6,
          3.024
        ],
        "animation": "falling-leaf",
        "duration": 14100,
        "delay": -3900
      },
      {
        "file": "crystal_leaf.webp",
        "box": [
          70.5,
          41.2,
          3.4,
          2.856
        ],
        "animation": "falling-leaf",
        "duration": 15200,
        "delay": -5850
      },
      {
        "file": "crystal_leaf.webp",
        "box": [
          57.2,
          36.8,
          2.5,
          2.1
        ],
        "animation": "falling-leaf",
        "duration": 13900,
        "delay": -7800
      },
      {
        "file": "crystal_leaf.webp",
        "box": [
          33,
          44,
          2.4,
          2.016
        ],
        "animation": "falling-leaf",
        "duration": 15900,
        "delay": -9750
      }
    ]
  },
  "15": {
    "kind": "layers",
    "left": 0,
    "top": 0,
    "width": 100,
    "height": 100,
    "layers": [
      {
        "file": "firefly.webp",
        "box": [
          18,
          55,
          5,
          3.25
        ],
        "animation": "meadow-firefly",
        "duration": 8600,
        "delay": -850
      },
      {
        "file": "firefly.webp",
        "box": [
          32,
          49,
          4.2,
          2.7300000000000004
        ],
        "animation": "firefly-cross",
        "duration": 10400,
        "delay": -1561
      },
      {
        "file": "firefly.webp",
        "box": [
          24,
          41,
          4.2,
          2.7300000000000004
        ],
        "animation": "meadow-firefly",
        "duration": 9900,
        "delay": -2272
      },
      {
        "file": "firefly.webp",
        "box": [
          39,
          37,
          3.5,
          2.275
        ],
        "animation": "meadow-firefly",
        "duration": 12100,
        "delay": -2983
      },
      {
        "file": "firefly.webp",
        "box": [
          57,
          42,
          4.4,
          2.8600000000000003
        ],
        "animation": "firefly-cross",
        "duration": 9350,
        "delay": -3694
      },
      {
        "file": "firefly.webp",
        "box": [
          72,
          47,
          4.8,
          3.12
        ],
        "animation": "meadow-firefly",
        "duration": 8600,
        "delay": -4405
      },
      {
        "file": "firefly.webp",
        "box": [
          80,
          54,
          5.4,
          3.5100000000000002
        ],
        "animation": "meadow-firefly",
        "duration": 10400,
        "delay": -5116
      },
      {
        "file": "firefly.webp",
        "box": [
          64,
          57,
          4.8,
          3.12
        ],
        "animation": "firefly-cross",
        "duration": 9900,
        "delay": -5827
      },
      {
        "file": "firefly.webp",
        "box": [
          29,
          63,
          5,
          3.25
        ],
        "animation": "meadow-firefly",
        "duration": 12100,
        "delay": -6538
      },
      {
        "file": "firefly.webp",
        "box": [
          50,
          61,
          4.4,
          2.8600000000000003
        ],
        "animation": "meadow-firefly",
        "duration": 9350,
        "delay": -7249
      },
      {
        "file": "firefly.webp",
        "box": [
          16,
          66,
          4.6,
          2.9899999999999998
        ],
        "animation": "firefly-cross",
        "duration": 8600,
        "delay": -7960
      },
      {
        "file": "firefly.webp",
        "box": [
          78,
          67,
          4.3,
          2.795
        ],
        "animation": "meadow-firefly",
        "duration": 10400,
        "delay": -8671
      }
    ]
  },
  "16": {
    "file": "ink_16.webp",
    "kind": "bird",
    "left": 18.076923076923077,
    "top": 26,
    "width": 63.84615384615384,
    "height": 38,
    "duration": 2560,
    "wingFile": "bird_wings.webp",
    "layers": [
      {
        "file": "ocean_16.webp",
        "box": [
          3.6,
          72.1,
          92.8,
          8.9
        ],
        "animation": "ink-loop",
        "duration": 10240,
        "delay": -1843,
        "frames": 32
      },
      {
        "effect": "star",
        "box": [
          12,
          14,
          1.64,
          1.066
        ],
        "animation": "night-star",
        "duration": 5300,
        "delay": -1120
      },
      {
        "effect": "star",
        "box": [
          16,
          24,
          0.9,
          0.585
        ],
        "animation": "night-star",
        "duration": 6780,
        "delay": -3117
      },
      {
        "effect": "star",
        "box": [
          19,
          7.9,
          1.1,
          0.715
        ],
        "animation": "night-star",
        "duration": 7300,
        "delay": -5114
      },
      {
        "effect": "star",
        "box": [
          25,
          15.1,
          2.1,
          1.365
        ],
        "animation": "night-star",
        "duration": 6100,
        "delay": -111
      },
      {
        "effect": "star",
        "box": [
          26.8,
          24.7,
          1.05,
          0.683
        ],
        "animation": "night-star",
        "duration": 7800,
        "delay": -2108
      },
      {
        "effect": "star",
        "box": [
          30.4,
          19.8,
          1.42,
          0.923
        ],
        "animation": "night-star",
        "duration": 5300,
        "delay": -4105
      },
      {
        "effect": "star",
        "box": [
          33.1,
          11.2,
          0.8,
          0.52
        ],
        "animation": "night-star",
        "duration": 6780,
        "delay": -6102
      },
      {
        "effect": "star",
        "box": [
          36.2,
          6.4,
          1.48,
          0.962
        ],
        "animation": "night-star",
        "duration": 7300,
        "delay": -1099
      },
      {
        "effect": "star",
        "box": [
          38,
          26.2,
          0.98,
          0.637
        ],
        "animation": "night-star",
        "duration": 6100,
        "delay": -3096
      },
      {
        "effect": "star",
        "box": [
          41.4,
          17.7,
          1.68,
          1.092
        ],
        "animation": "night-star",
        "duration": 7800,
        "delay": -5093
      },
      {
        "effect": "star",
        "box": [
          45.6,
          12.1,
          1.03,
          0.67
        ],
        "animation": "night-star",
        "duration": 5300,
        "delay": -90
      },
      {
        "effect": "star",
        "box": [
          48,
          25.1,
          1.23,
          0.799
        ],
        "animation": "night-star",
        "duration": 6780,
        "delay": -2087
      },
      {
        "effect": "star",
        "box": [
          50.3,
          8.8,
          0.76,
          0.494
        ],
        "animation": "night-star",
        "duration": 7300,
        "delay": -4084
      },
      {
        "effect": "star",
        "box": [
          53.1,
          16.2,
          1.33,
          0.865
        ],
        "animation": "night-star",
        "duration": 6100,
        "delay": -6081
      },
      {
        "effect": "star",
        "box": [
          56.8,
          22.7,
          0.96,
          0.624
        ],
        "animation": "night-star",
        "duration": 7800,
        "delay": -1078
      },
      {
        "effect": "star",
        "box": [
          61.2,
          8.2,
          2.02,
          1.313
        ],
        "animation": "night-star",
        "duration": 5300,
        "delay": -3075
      },
      {
        "effect": "star",
        "box": [
          61.9,
          14.2,
          0.93,
          0.605
        ],
        "animation": "night-star",
        "duration": 6780,
        "delay": -5072
      },
      {
        "effect": "star",
        "box": [
          65.2,
          27.2,
          1.31,
          0.852
        ],
        "animation": "night-star",
        "duration": 7300,
        "delay": -69
      },
      {
        "effect": "star",
        "box": [
          69.4,
          20.7,
          1.78,
          1.157
        ],
        "animation": "night-star",
        "duration": 6100,
        "delay": -2066
      },
      {
        "effect": "star",
        "box": [
          71.2,
          12.4,
          1.06,
          0.689
        ],
        "animation": "night-star",
        "duration": 7800,
        "delay": -4063
      },
      {
        "effect": "star",
        "box": [
          76.2,
          7.4,
          1.18,
          0.767
        ],
        "animation": "night-star",
        "duration": 5300,
        "delay": -6060
      },
      {
        "effect": "star",
        "box": [
          79.2,
          23,
          0.83,
          0.539
        ],
        "animation": "night-star",
        "duration": 6780,
        "delay": -1057
      },
      {
        "effect": "star",
        "box": [
          82.7,
          17.1,
          2.22,
          1.443
        ],
        "animation": "night-star",
        "duration": 7300,
        "delay": -3054
      },
      {
        "effect": "star",
        "box": [
          85.7,
          10.8,
          1.03,
          0.67
        ],
        "animation": "night-star",
        "duration": 6100,
        "delay": -5051
      },
      {
        "effect": "star",
        "box": [
          88.3,
          24.8,
          1.32,
          0.858
        ],
        "animation": "night-star",
        "duration": 7800,
        "delay": -48
      },
      {
        "effect": "star",
        "box": [
          91.2,
          20.7,
          0.92,
          0.598
        ],
        "animation": "night-star",
        "duration": 5300,
        "delay": -2045
      },
      {
        "effect": "star",
        "box": [
          9.2,
          28.5,
          0.87,
          0.566
        ],
        "animation": "night-star",
        "duration": 6780,
        "delay": -4042
      },
      {
        "effect": "star",
        "box": [
          75.3,
          30,
          1.08,
          0.702
        ],
        "animation": "night-star",
        "duration": 7300,
        "delay": -6039
      }
    ]
  }
};

const audioClips = {
  "music": {
    "file": "healing-water-loop-62d51be3cdc1.mp3",
    "size": 90427,
    "encoded": "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"
  },
  "answerSound": {
    "file": "answer-drop-99f57cd1862c.mp3",
    "size": 1676,
    "encoded": "SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYxLjcuMTAzAAAAAAAAAAAAAAD/84TAAAAAAAAAAAAASW5mbwAAAA8AAAAMAAAGYAAwMDAwMDAwMENDQ0NDQ0NDVlZWVlZWVlZpaWlpaWlpaWl8fHx8fHx8fI+Pj4+Pj4+PoaGhoaGhoaGhtLS0tLS0tLTHx8fHx8fHx9ra2tra2tra2u3t7e3t7e3t//////////8AAAAATGF2YzYxLjE5AAAAAAAAAAAAAAAAJAMwAAAAAAAABmATFvCkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/81TEABYZJkSnSHgAgBKvonzfwiInuki4uMAQAAAEB8TQljpjUbnI808eU+b33i+8U938fD9/ulPm/vf/5vfEMP1vB/8QODFQYEhw+IAiCFQYEgY//8oc/l38P8u/g//9BS1TgwobfaWgCcfw30tKGXGVtYC8cCH/81TEEhnxKrHlj8AAgG1mZmVl/0K5UBDiwpoZ4xhDSBNv47sDUGcV3Z7LOSiMTmpVvWWsv/7eGH4Ybxx3r////7egTefErTvLjw+Aw8VnfwfDG6Bqj3/d09URf/gM+J5/+AZXeEUCW7f7f8f23pPJNhpRCHdrYMf/81TEFRySrs7/yUAC/oiCrsWBSAWA+EZAnQl4ersyhJTMLMql6OlTVVEPFsWZIyNLRlppGSkLs9stwk/1PHw39dRd2z1rS0yfW0/N391cRsxy7/dLNR13PjBsiW0RFqAmImG96CKFsyraqiwHpKkHo0qSDOjlQKb/81TEDRrZOm1WXgxwzbnfpdVpfEpMMmIWmAICSCojx1NlfUNWXAJGW7Uc3PBSqxqt7nxCf7Ndq2DO2bO5LLhwuiOUePNFluEJhA2oWBljDSRdRa+YGUB1dfVU4JouexCkGGpa8ZbNNYjtpfUOGscmlt2HwxBMfDv/81TEDBnZ6n4eW8bIziGDBwiGlIVJ2DvGkLS2FcpylZrt3Z4zYxs7+PXZAWlHQggtCuGx6S2zcVScjhRtPOT43fX8sjszL1zyZykNlGEpUecFwGyJXVgIi3F2STcfUHw5aqItK+z1oUoEIqNPh/73Zor2utnyVlP/81TEDxqRImFdT3gAC1SFWEzv0W+SKWcUk7MdTppyjn6eOrPlcrmJXPl9HIWcIyC/tT3Hzjd81rjG8ZtrMWk0YDE8xpEUXCdxVrIXPBpY66Y12GIVCbFRKxLzyiTlmEDhc4LMILTQm+ooWW3OJze3abPbRsBgDd3/81TEDxvJ2opfjHgArOMpY3D5IDHhhQNlsrKJaBk1tpidkYbaap5bksmduLA4EBhR40Gma62yofPErq/w9iY38LpZQt+/3rOcZ+/bX9vHgUiZ39a+PPvFM+mPj++9x4GnnA55nr+8cj///TjU1ZJ9QMRZjJw6iNb/81TEChlahngBg5AAJKT61kNRME1ralvooDpHMEA0WZMo6rAAoCORYiuTg9lgQGJ0sl83QUXlGJcIMfKpMspZ5FXl39TpOdomCNevS/84bpGbLQdV7I///+nMTJEGUGQ6AdW7/0hzw4oBlLum6RthsMKAavKVh1T/81TEDxsyQnGdglgAvTLYJA5SD8QUj2WLvmnL02b5uuGMPTb4j8fw9DsJCxwkCi1BZyS7ulyg2VQ66/h0//7GfEvumtlrb7j///6j/uN/LuJ4nR/zbigYUAz4nF1uPVgqn/fHf54GiISeSv4V16+4La3PYbLM9+3/81TEDRXpCjABz2AAtn+1aPk5DtcCpJz2XOoenMv21irXHetMwPTAycNh8bn3wutRMlDzDoUDqksHKEThTYdWYK4TYmLHp5YoHX1bSHXZlntYWHWrdztdgTRsF2W3dUOiJxIi87FTuRJT2W9uCp36n/+d/keueZ3/81TEIAt4BkGeAEQAZ7eG5H/8rPf+S+V//ypkaurkqRFSpRG5qMorJLuaQoiERA6NkDbG4wiI00Xynj0IWBUFQ8NkCNAukVKlG3Gq+FRYW/WLf//4sLiP9QuziyIqKNxXi3LBIVDNTEFNRTMuMTAwVVVVVVVVVVX/81TEXRLpDZQCSFMEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="
  },
  "flipSound": {
    "file": "card-flip-22be110e9eb8.mp3",
    "size": 5420,
    "encoded": "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"
  },
  "writingSound": {
    "file": "quill-paper-39506aceb551.mp3",
    "size": 11972,
    "encoded": "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"
  }
};

/**
 * 灵魂原像的固定 16 张卡牌匹配模型
 * config 来自 spirit_shape_v1_config.json；无网络、无AI推理
 */
function matchSpirit(answers, config) {
  if (!config || !config.questions || !config.outcomes) {
    throw new Error("缺少或无效的评分配置");
  }
  const total = config.questions.length;
  if (!Array.isArray(answers) || answers.length !== total) {
    throw new Error(`需要恰好${total}道题的答案，按题号顺序传入`);
  }
  const valid = new Set(["A", "B", "C", "D"]);
  const input = answers.map((v) => String(v).toUpperCase());
  if (input.some((v) => !valid.has(v))) {
    throw new Error("答案只能使用A、B、C、D");
  }
  const scores = config.outcomes.map((outcome, index) => ({
    id: outcome.id,
    key: outcome.key,
    name: outcome.name,
    image_filename: outcome.image_filename,
    raw: 0,
    base_offset: outcome.base_offset,
    tie_epsilon: outcome.tie_epsilon == null ? index * 0.00001 : outcome.tie_epsilon,
  }));
  for (let q = 0; q < total; q++) {
    const opt = config.questions[q].options.find((v) => v.code === input[q]);
    if (!opt) throw new Error(`第 ${q + 1} 题缺少选项配置`);
    for (const result of scores) result.raw += (opt.weights && opt.weights[result.name]) || 0;
  }
  for (const score of scores) {
    score.total = score.raw + score.base_offset + score.tie_epsilon;
  }
  scores.sort((a, b) => b.total - a.total);
  return {
    result: scores[0],
    runner_up: scores[1],
    margin: Number((scores[0].total - scores[1].total).toFixed(5)),
    ranking: scores,
    answers: input,
    note: "艺术意象匹配结果，不代表可靠的人格心理测量。",
  };
}


/**
 * Shared session for the small program and the offline browser preview.
 * A result's numeric ID is the link between the matcher and the finished deck.
 */
function createQuiz(config, cards, matchSpirit) {
  const questions = config.questions;
  const total = questions.length;
  let screen = "home";
  let index = 0;
  let answers = new Array(total).fill(null);
  let result = null;
  let galleryCard = null;

  const positions = [
    [15, 14], [45, 9], [77, 15], [29, 27],
    [61, 31], [86, 34], [16, 43], [41, 47],
    [73, 49], [21, 63], [49, 62], [85, 65],
    [15, 83], [40, 79], [65, 85], [83, 91],
  ];
  const coverTitles = Object.values(cards).map((card, i) => {
    const [left, top] = positions[i];
    const seconds = 15 + (i * 7 % 10);
    const phase = (i * 3.7 % seconds).toFixed(1);
    return {
      id: card.id,
      title: card.title,
      left: left + "%",
      top: top + "%",
      duration: seconds + "s",
      delay: "-" + phase + "s",
    };
  });

  function isCurrentQuestion(step) {
    return screen === "quiz" && Number(step) === index;
  }

  function start() {
    if (screen !== "home") return false;
    screen = "quiz";
    return true;
  }

  function choose(code, step) {
    if (!isCurrentQuestion(step)) return false;
    if (!questions[index].options.some((option) => option.code === code)) return false;
    answers[index] = code;
    return true;
  }

  function back(step) {
    if (!isCurrentQuestion(step) || index === 0) return false;
    index -= 1;
    return true;
  }

  function next(step) {
    if (!isCurrentQuestion(step) || !answers[index]) return false;
    if (index < total - 1) {
      index += 1;
    } else {
      const matched = matchSpirit(answers, config).result;
      result = cards[matched.id];
      screen = "result";
    }
    return true;
  }

  function restart() {
    if (screen !== "result" || galleryCard) return false;
    answers = new Array(total).fill(null);
    index = 0;
    result = null;
    screen = "quiz";
    return true;
  }

  function openGallery() {
    if (screen !== "result") return false;
    galleryCard = null;
    screen = "gallery";
    return true;
  }

  function browseCard(cardId) {
    const card = cards[Number(cardId)];
    if (screen !== "gallery" || !card) return false;
    galleryCard = card;
    screen = "result";
    return true;
  }

  function closeGallery() {
    if (screen !== "gallery") return false;
    screen = "result";
    return true;
  }

  function view() {
    const question = questions[index];
    return {
      screen,
      index,
      stepLabel: String(index + 1).padStart(2, "0"),
      total,
      title: question.title,
      prompt: question.prompt,
      options: question.options.map((option) => ({
        code: option.code,
        text: option.text,
        art: option.art || ("q" + String(question.id).padStart(2, "0") + "_" + option.code.toLowerCase() + ".webp"),
        selected: option.code === answers[index],
      })),
      progress: questions.map((item, position) => ({
        id: item.id,
        status: position < index ? "done" : (position === index ? "current" : "pending"),
      })),
      canNext: Boolean(answers[index]),
      canBack: index > 0,
      homeLabel: "去探寻",
      coverTitles,
      backLabel: "上一题",
      result: galleryCard || result,
      viewingGalleryCard: Boolean(galleryCard),
    };
  }

  return { start, choose, back, next, restart, openGallery, browseCard, closeGallery, view };
}


function writeReading(sections, onFrame) {
  const lines = sections.map((text) => Array.from(text));
  const pauses = { "，": 72, "、": 64, "；": 95, "：": 95, "。": 125, "！": 125, "？": 125 };
  let line = 0;
  let position = 0;
  let timer = setTimeout(writeNext, 250);

  function writeNext() {
    const characters = lines[line];
    const character = characters[position];
    position += 1;
    const written = characters.slice(0, position).join("");
    const remaining = characters.slice(position).join("");
    const done = !remaining && line === lines.length - 1;
    onFrame(line, written, remaining, done);
    if (done) return;
    if (remaining) {
      timer = setTimeout(writeNext, pauses[character] || 41);
    } else {
      line += 1;
      position = 0;
      timer = setTimeout(writeNext, 180);
    }
  }

  return () => clearTimeout(timer);
}


function createAudio(clips, toggle, notice) {
  const preference = "soul-original-music";
  const active = {};
  const pending = {};
  const decoded = {};
  const levels = { music: .65, answerSound: 1, flipSound: 1, writingSound: 1 };
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  let context;
  let enabled = true;
  let unlocked = false;
  let writing = false;
  let noticeTimer;
  let musicOffset = 0;
  try { enabled = localStorage.getItem(preference) !== "off"; } catch (error) {}

  function update() {
    const label = enabled ? "关闭声音" : "开启声音";
    toggle.classList.toggle("music-off", !enabled);
    toggle.classList.toggle("music-paused", !active.music);
    toggle.setAttribute("aria-pressed", String(enabled));
    toggle.setAttribute("aria-label", label);
    toggle.title = label;
  }

  function show(message) {
    clearTimeout(noticeTimer);
    notice.textContent = message;
    notice.hidden = !message;
    if (message) noticeTimer = setTimeout(() => { notice.hidden = true; }, 4500);
  }

  function decode(key) {
    if (!decoded[key]) {
      const bytes = atob(clips[key].encoded);
      const buffer = new Uint8Array(bytes.length);
      for (let index = 0; index < bytes.length; index += 1) buffer[index] = bytes.charCodeAt(index);
      decoded[key] = new Promise((resolve, reject) => context.decodeAudioData(buffer.buffer, resolve, reject));
    }
    return decoded[key];
  }

  function stop(key) {
    delete pending[key];
    const player = active[key];
    if (!player) return;
    delete active[key];
    if (key === "music") {
      musicOffset = (player.offset + context.currentTime - player.started) % player.source.buffer.duration;
    }
    player.source.stop();
    update();
  }

  function play(key) {
    if (!enabled || !unlocked || !context || document.hidden || active[key] || pending[key]) return;
    const request = {};
    pending[key] = request;
    decode(key).then((clip) => {
      if (pending[key] !== request) return;
      delete pending[key];
      if (!enabled || document.hidden || context.state !== "running") return;
      const source = context.createBufferSource();
      const gain = context.createGain();
      const offset = key === "music" ? musicOffset : 0;
      source.buffer = clip;
      source.loop = key === "music" || key === "writingSound";
      gain.gain.value = levels[key];
      source.connect(gain);
      gain.connect(context.destination);
      active[key] = { source, started: context.currentTime, offset };
      source.onended = () => {
        source.disconnect();
        gain.disconnect();
        if (active[key] && active[key].source === source) {
          delete active[key];
          update();
        }
      };
      source.start(0, offset);
      if (key === "music") show("");
      update();
    }).catch(() => {
      if (pending[key] !== request) return;
      delete pending[key];
      delete decoded[key];
      if (key === "music") show("声音载入失败，请再点击音乐图标。");
    });
  }

  function unlock(effect) {
    if (!enabled || document.hidden) return;
    if (!AudioContext) {
      show("当前环境无法播放声音。");
      return;
    }
    if (!context) {
      try { context = new AudioContext(); } catch (error) {
        show("暂时无法播放声音。");
        return;
      }
    }
    const resume = context.state === "running" ? Promise.resolve() : context.resume();
    resume.then(() => {
      unlocked = true;
      play("music");
      if (writing) play("writingSound");
      if (effect) play(effect);
      decode("flipSound").catch(() => { delete decoded.flipSound; });
    }).catch(() => show("点一下音乐图标即可重试。"));
  }

  function setWriting(value) {
    writing = value;
    if (value) unlock();
    else stop("writingSound");
  }

  toggle.addEventListener("click", () => {
    if (enabled && !active.music && !pending.music) {
      unlock();
      return;
    }
    enabled = !enabled;
    try { localStorage.setItem(preference, enabled ? "on" : "off"); } catch (error) {}
    if (enabled) unlock();
    else {
      Object.keys(clips).forEach(stop);
      show("");
    }
    update();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) Object.keys(clips).forEach(stop);
    else if (unlocked) unlock();
  });
  update();
  return { unlock, play, stop, setWriting };
}


const session = createQuiz(config, cards, matchSpirit);
const element = (id) => document.getElementById(id);
const screens = ["home", "quiz", "loading", "result", "gallery"];
const headings = { home: "home-title", quiz: "prompt", loading: "loading-heading", result: "result", gallery: "gallery-heading" };
const contentScroll = element("content-scroll");
const resultImage = element("result-image");
const resultStage = element("result-stage");
const inkWindow = element("art-ink-window");
const readCard = element("read-card");
const saveCard = element("save-card");
const readingPanel = element("result-reading");
const bookmark = element("bookmark");
const bookmarkImage = element("bookmark-image");
const bookmarkSave = element("bookmark-save");
const bookmarkClose = element("bookmark-close");
const bookmarkStatus = element("bookmark-status");
const sound = createAudio(audioClips, element("music-toggle"), element("audio-notice"));
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const asset = (folder, file) => soulMedia[folder + "/" + file];
const miniTool = () => window.xhs && window.xhs.miniTool;
const readingBlocks = ["title", "poem", "text"].map((part) => ({
  written: element("reading-" + part + "-written"),
  rest: element("reading-" + part + "-rest"),
  cursor: element("reading-" + part + "-cursor"),
}));
let current = session.view();
let advanceTimer;
let galleryScroll = 0;
let galleryReturnButton;
let readingGateTimer;
let cancelWriting;
let renderedStep = -1;
let optionButtons = [];
let bookmarkCard;
let bookmarkBusy = false;

function focus(target) {
  target.focus({ preventScroll: true });
}

function setLayout() {
  const root = document.documentElement;
  const width = root.clientWidth;
  const height = root.clientHeight;
  const scene = element("lake-scene");
  const surface = .5 * height + Math.max(.132 * height, .2346 * Math.min(width, 850));
  scene.style.setProperty("--lake-surface", surface + "px");
  root.style.setProperty("--content-width", Math.min(width, 448) + "px");
  fitPoem();
}
window.addEventListener("resize", setLayout);

function fitPoem() {
  if (current.result) {
    const width = Math.min(document.documentElement.clientWidth, 448);
    const size = Math.min(14, (width - 108) / current.result.poem.length);
    readingPanel.style.setProperty("--poem-size", size.toFixed(2) + "px");
  }
}

let insetRequest = 0;
async function setContainerInsets() {
  const tool = miniTool();
  if (!tool) return;
  const root = document.documentElement;
  root.classList.add("mini-tool");
  if (typeof tool.getWindowInfo !== "function") return;
  const request = ++insetRequest;
  try {
    const info = await tool.getWindowInfo();
    if (request !== insetRequest || !info || !info.safeArea) return;
    const { safeArea, windowWidth, windowHeight } = info;
    if (!(windowWidth > 0 && windowHeight > 0)) return;
    const visible = Object.values(info.menuButtons || {}).filter(Boolean);
    const topRight = visible.filter((box) => box.left >= windowWidth / 2);
    const safeRight = Math.max(0, windowWidth - safeArea.right);
    let right = Math.max(14 + safeRight, (windowWidth - 448) / 2 + 14);
    let top = safeArea.top + 3;
    if (topRight.length) {
      const left = Math.min(...topRight.map((box) => box.left));
      if (left - 50 > windowWidth / 2) {
        right = Math.max(right, windowWidth - left + 6);
        top = Math.max(top, Math.min(...topRight.map((box) => box.top)));
      } else {
        top = Math.max(top, ...topRight.map((box) => box.bottom + 4));
      }
    }
    const inset = Math.max(top + 34, safeArea.top, ...visible.map((box) => box.bottom + 4));
    root.style.setProperty("--scene-inset", inset + "px");
    root.style.setProperty("--sound-top", top + "px");
    root.style.setProperty("--sound-right", right + "px");
    root.style.setProperty("--safe-left", Math.max(0, safeArea.left) + "px");
    root.style.setProperty("--safe-right", safeRight + "px");
    root.style.setProperty("--safe-bottom", Math.max(0, windowHeight - safeArea.bottom) + "px");
  } catch (error) {
    // The CSS safe areas also work without the optional host bridge.
  }
}
window.addEventListener("resize", setContainerInsets);
window.addEventListener("pageshow", setContainerInsets);

function preventZoom(event) {
  if (event.cancelable) event.preventDefault();
}
document.addEventListener("gesturestart", preventZoom, { passive: false });
document.addEventListener("gesturechange", preventZoom, { passive: false });
document.addEventListener("touchmove", (event) => {
  if (event.touches.length > 1) preventZoom(event);
}, { passive: false });

for (const card of current.coverTitles) {
  const title = document.createElement("span");
  title.className = "cover-title";
  title.textContent = card.title;
  title.style.left = card.left;
  title.style.top = card.top;
  title.style.animationDuration = card.duration;
  title.style.animationDelay = card.delay;
  element("cover-titles").append(title);
}

const segments = config.questions.map(() => {
  const segment = document.createElement("span");
  element("progress").append(segment);
  return segment;
});

function createOption(option, step) {
  const item = document.createElement("div");
  item.className = "option-item";
  const art = document.createElement("div");
  art.className = "option-art";
  art.setAttribute("aria-hidden", "true");
  const prop = document.createElement("img");
  prop.className = "option-prop";
  prop.alt = "";
  prop.src = asset("options", option.art);
  art.append(prop);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "option";
  const badge = document.createElement("span");
  badge.className = "option-code";
  badge.textContent = option.code;
  const label = document.createElement("span");
  label.className = "option-text";
  label.textContent = option.text;
  const mark = document.createElement("span");
  mark.className = "option-mark";
  mark.setAttribute("aria-hidden", "true");
  button.append(badge, label, mark);
  item.append(art, button);
  button.addEventListener("click", () => {
    if (advanceTimer != null || !session.choose(option.code, step)) return;
    sound.unlock("answerSound");
    advanceTimer = setTimeout(() => {
      advanceTimer = null;
      if (!session.next(step)) return;
      const next = session.view();
      if (next.screen === "result") reveal(next.result, true);
      else render(true);
    }, 420);
    render(false);
  });
  return { item, button, mark };
}

function render(moveFocus, screenOverride) {
  current = session.view();
  const screen = screenOverride || current.screen;
  for (const name of screens) element(name).hidden = screen !== name;
  element("forest-scene").hidden = screen !== "quiz";
  element("lake-scene").hidden = screen !== "loading" && screen !== "result" && screen !== "gallery";

  if (screen === "quiz") {
    element("step").textContent = current.stepLabel;
    element("step-total").textContent = "/ " + current.total;
    element("question-title").textContent = current.title;
    element("prompt").textContent = current.prompt;
    element("back").disabled = !current.canBack;
    segments.forEach((segment, index) => {
      segment.className = "progress-segment " + current.progress[index].status;
    });
    if (renderedStep !== current.index) {
      renderedStep = current.index;
      optionButtons = current.options.map((option) => createOption(option, renderedStep));
      const options = element("options");
      options.textContent = "";
      optionButtons.forEach(({ item }) => options.append(item));
    }
    optionButtons.forEach(({ item, button, mark }, index) => {
      const selected = current.options[index].selected;
      item.classList.toggle("selected", selected);
      button.disabled = advanceTimer != null;
      button.setAttribute("aria-pressed", String(selected));
      mark.textContent = selected ? "◆" : "◇";
    });
    element("quiz-content").classList.toggle("answer-picked", advanceTimer != null);
  }

  if (moveFocus) {
    focus(element(headings[screen]));
    contentScroll.scrollTop = 0;
    if (screen === "quiz" && !reducedMotion.matches) {
      const frame = element("quiz-frame");
      frame.classList.remove("ripple-in");
      void frame.offsetWidth;
      frame.classList.add("ripple-in");
    }
  }
}

function mountMotion(root, id) {
  const motion = motions[id];
  const images = [];
  const layered = Boolean(motion.layers && motion.layers.length);
  root.hidden = false;
  root.dataset.motionId = String(id);
  root.textContent = "";
  root.classList.toggle("layered-ink", layered);
  root.classList.toggle("mirror-motion", id === 12);
  root.classList.toggle("bird-stars", id === 16);
  const position = (node, left, top, width, height) => {
    Object.assign(node.style, { left: left + "%", top: top + "%", width: width + "%", height: height + "%" });
  };
  position(root, ...(layered ? [0, 0, 100, 100] : [motion.left, motion.top, motion.width, motion.height]));
  const picture = (file, className) => {
    const image = document.createElement("img");
    image.className = className;
    image.alt = "";
    image.loading = root.id === "art-ink-window" ? "eager" : "lazy";
    image.src = asset("motion", file);
    image.addEventListener("error", () => {
      if (root.dataset.motionId === String(id)) root.hidden = true;
    });
    images.push(image);
    return image;
  };
  if (layered) {
    let floating;
    if (motion.floatDuration) {
      floating = document.createElement("div");
      floating.className = "card-motion-group card-motion-float";
      floating.style.animationDuration = motion.floatDuration + "ms";
      floating.style.animationDelay = -motion.floatDuration / 2 + "ms";
    }
    for (const layer of motion.layers) {
      const wrapper = document.createElement("div");
      wrapper.className = layer.clip ? "card-motion-layer card-motion-ellipse" : "card-motion-layer";
      position(wrapper, ...layer.box);
      let track;
      if (layer.effect === "star") {
        track = document.createElement("div");
        track.className = "card-motion-image motion-star";
        wrapper.classList.add("card-motion-star-layer");
      } else {
        track = picture(layer.file, "card-motion-image");
      }
      if (layer.frames) {
        wrapper.className += " card-motion-frames";
        track.style.height = layer.frames * 100 + "%";
        track.style.animationTimingFunction = "steps(" + layer.frames + ", end)";
      }
      if (layer.animation) {
        track.style.animationName = layer.animation;
        track.style.animationDuration = layer.duration + "ms";
        track.style.animationDelay = (layer.delay || 0) + "ms";
      }
      if (layer.origin) track.style.transformOrigin = layer.origin.map((value) => value + "%").join(" ");
      wrapper.append(track);
      (layer.floating ? floating : root).append(wrapper);
    }
    if (floating) root.append(floating);
    if (motion.kind === "layers") return images;
  }
  const artwork = layered ? document.createElement("div") : root;
  if (layered) {
    artwork.className = "art-ink-window";
    position(artwork, motion.left, motion.top, motion.width, motion.height);
    root.append(artwork);
  }
  if (!motion.kind) {
    const strip = picture(motion.file, "art-ink-strip");
    strip.style.animationDuration = motion.duration + "ms";
    artwork.append(strip);
    return images;
  }
  artwork.append(picture(motion.file, "motion-plate"));
  if (motion.kind === "bird") {
    const flight = document.createElement("div");
    flight.className = "bird-flight";
    const wings = picture(motion.wingFile, "bird-wing-strip");
    wings.style.animationDuration = motion.duration + "ms";
    flight.append(wings);
    artwork.append(flight);
    return images;
  }
  const camera = document.createElement("div");
  camera.className = "carousel-motion";
  const tilt = document.createElement("div");
  tilt.className = "carousel-tilt";
  const ring = document.createElement("div");
  ring.className = "carousel-ring";
  ring.style.animationDuration = motion.duration + "ms";
  for (let index = 0; index < 4; index += 1) {
    const station = document.createElement("div");
    station.className = "horse-station";
    const rod = document.createElement("div");
    rod.className = "horse-rod";
    const horse = document.createElement("div");
    horse.className = "horse-body";
    horse.append(picture("horse_side.webp", "horse-side"), picture("horse_front.webp", "horse-end horse-front"), picture("horse_rear.webp", "horse-end horse-rear"));
    station.append(rod, horse);
    ring.append(station);
  }
  tilt.append(ring, picture("carousel_mast.webp", "carousel-spindle"));
  camera.append(tilt);
  artwork.append(camera);
  return images;
}

function resetResultEffects() {
  clearTimeout(readingGateTimer);
  if (cancelWriting) cancelWriting();
  cancelWriting = null;
  sound.setWriting(false);
  sound.stop("flipSound");
  readCard.hidden = true;
  saveCard.hidden = true;
  readingPanel.hidden = true;
  readingPanel.setAttribute("aria-busy", "false");
  for (const block of readingBlocks) {
    block.written.textContent = "";
    block.rest.textContent = "";
    block.cursor.hidden = true;
  }
}

function offerReading() {
  clearTimeout(readingGateTimer);
  if (element("result").hidden) return;
  if (readingPanel.hidden) readCard.hidden = false;
  saveCard.hidden = false;
}

async function reveal(card, showLoading) {
  resetResultEffects();
  resultStage.hidden = false;
  element("result-error").hidden = true;
  resultImage.alt = card.title + "。" + card.poem;
  const result = element("result");
  result.setAttribute("aria-label", card.title);
  resultImage.src = asset("cards", card.file);
  const motionImages = mountMotion(inkWindow, card.id);
  const browsing = session.view().viewingGalleryCard;
  element("result-context").textContent = browsing ? "原像图鉴" : "你的灵魂原像";
  element("gallery-label").textContent = browsing ? "返回图鉴" : "查看全部 16 种原像";
  element("restart").hidden = browsing;
  render(true, "loading");
  const imageReady = Promise.all([resultImage, ...motionImages].map((image) =>
    typeof image.decode === "function" ? image.decode().catch(() => {}) : Promise.resolve()
  ));
  await Promise.all([delay(showLoading ? 880 : 0), Promise.race([imageReady, delay(1900)])]);
  if (resultImage.complete && resultImage.naturalWidth === 0) showCardError();
  render(true);
  if (resultStage.hidden || reducedMotion.matches) offerReading();
  else {
    sound.play("flipSound");
    readingGateTimer = setTimeout(offerReading, 1320);
  }
}
function showCardError() {
  resultStage.hidden = true;
  element("result-error").hidden = false;
  sound.stop("flipSound");
  offerReading();
}
resultImage.addEventListener("error", showCardError);
element("result-flight").addEventListener("animationend", (event) => {
  if (event.currentTarget === event.target && event.animationName === "card-approach") offerReading();
});

readCard.addEventListener("click", () => {
  if (current.screen !== "result" || readCard.hidden) return;
  const { title, poem, reading } = current.result;
  const sections = [title, poem, reading];
  readCard.hidden = true;
  readingPanel.hidden = false;
  fitPoem();
  if (reducedMotion.matches) {
    readingBlocks.forEach((block, index) => { block.written.textContent = sections[index]; });
  } else {
    readingPanel.setAttribute("aria-busy", "true");
    readingBlocks.forEach((block, index) => { block.rest.textContent = sections[index]; });
    let active = readingBlocks[0];
    active.cursor.hidden = false;
    sound.setWriting(true);
    cancelWriting = writeReading(sections, (index, prefix, remaining, done) => {
      const block = readingBlocks[index];
      block.written.textContent = prefix;
      block.rest.textContent = remaining;
      if (active !== block) {
        active.cursor.hidden = true;
        block.cursor.hidden = false;
        active = block;
      }
      if (done) {
        active.cursor.hidden = true;
        readingPanel.setAttribute("aria-busy", "false");
        cancelWriting = null;
        sound.setWriting(false);
      }
    });
  }
  focus(readingPanel);
  readingPanel.scrollIntoView({ block: "nearest", behavior: reducedMotion.matches ? "auto" : "smooth" });
});

function updateBookmarkAvailability() {
  if (!bookmarkCard || bookmarkBusy) return;
  const available = bookmarkImage.complete && bookmarkImage.naturalWidth > 0;
  bookmarkSave.disabled = !available;
  if (available) bookmarkStatus.textContent = "";
}
bookmarkImage.addEventListener("load", updateBookmarkAvailability);
bookmarkImage.addEventListener("error", () => {
  if (!bookmarkCard) return;
  bookmarkSave.disabled = true;
  bookmarkStatus.textContent = "书签加载失败，返回卡牌后可重试。";
});

saveCard.addEventListener("click", () => {
  if (current.screen !== "result" || saveCard.hidden || bookmarkCard) return;
  bookmarkCard = current.result;
  bookmarkSave.textContent = miniTool() ? "保存到相册" : "下载书签";
  bookmarkSave.disabled = true;
  bookmarkStatus.textContent = "正在载入书签…";
  bookmarkImage.src = asset("bookmarks", String(bookmarkCard.id).padStart(2, "0") + ".jpg");
  bookmarkImage.alt = bookmarkCard.title + "的卡牌书签";
  bookmark.hidden = false;
  contentScroll.classList.add("modal-open");
  focus(bookmarkClose);
  contentScroll.setAttribute("aria-hidden", "true");
  updateBookmarkAvailability();
});

function closeBookmark() {
  if (bookmarkBusy || !bookmarkCard) return;
  bookmarkCard = null;
  bookmark.hidden = true;
  contentScroll.removeAttribute("aria-hidden");
  contentScroll.classList.remove("modal-open");
  focus(saveCard);
}
bookmarkClose.addEventListener("click", closeBookmark);
document.addEventListener("keydown", (event) => {
  if (!bookmarkCard) return;
  if (event.key === "Escape") closeBookmark();
  if (event.key === "Tab") {
    event.preventDefault();
    focus(bookmarkSave.disabled || document.activeElement === bookmarkSave ? bookmarkClose : bookmarkSave);
  }
});

async function saveToAlbum(tool) {
  const data = bookmarkImage.src;
  let path = data;
  if (typeof tool.writeTempFile === "function") {
    try {
      const temporary = await tool.writeTempFile({ data });
      if (temporary.filePath) path = temporary.filePath;
    } catch (error) {
      // The album API also accepts the encoded image directly.
    }
  }
  await tool.saveImageToPhotosAlbum({ filePath: path });
}

bookmarkSave.addEventListener("click", async () => {
  if (!bookmarkCard || bookmarkBusy || bookmarkSave.disabled) return;
  const tool = miniTool();
  if (!tool) {
    const download = document.createElement("a");
    download.href = bookmarkImage.src;
    download.download = bookmarkCard.title + "-灵魂书签.jpg";
    bookmark.append(download);
    download.click();
    download.remove();
    bookmarkStatus.textContent = "已发起书签下载。";
    return;
  }
  if (typeof tool.saveImageToPhotosAlbum !== "function") {
    bookmarkStatus.textContent = "请更新小红书后再保存到相册。";
    return;
  }
  bookmarkBusy = true;
  bookmarkSave.disabled = true;
  bookmarkClose.disabled = true;
  bookmarkSave.textContent = "正在保存…";
  bookmarkStatus.textContent = "";
  try {
    await saveToAlbum(tool);
    bookmarkSave.textContent = "已保存到相册";
  } catch (error) {
    const detail = String(error && (error.errMsg || error.message) || "");
    bookmarkStatus.textContent = /auth|permission|denied|权限|授权/i.test(detail)
      ? "请允许小红书访问相册，再试一次。"
      : "暂时无法保存书签，请再试一次。";
    bookmarkSave.textContent = "保存到相册";
    bookmarkSave.disabled = false;
  } finally {
    bookmarkBusy = false;
    bookmarkClose.disabled = false;
    focus(bookmarkClose);
  }
});

function mountGallery() {
  const grid = element("gallery-grid");
  if (grid.children.length) return;
  const observer = typeof IntersectionObserver === "function" && new IntersectionObserver((entries) => {
    entries.forEach((entry) => { entry.target.classList.toggle("motion-asleep", !entry.isIntersecting); });
  }, { root: contentScroll, rootMargin: "140px 0px" });
  for (const card of Object.values(cards)) {
    const entry = document.createElement("button");
    entry.type = "button";
    entry.className = "gallery-item";
    entry.setAttribute("aria-label", "查看" + card.title);
    const art = document.createElement("span");
    art.className = "gallery-art";
    const front = document.createElement("img");
    front.className = "gallery-art-image";
    front.alt = "";
    front.loading = "lazy";
    front.src = asset("cards", card.file);
    const artWindow = document.createElement("span");
    artWindow.className = "art-ink-window";
    mountMotion(artWindow, card.id);
    art.append(front, artWindow);
    const title = document.createElement("span");
    title.className = "gallery-name";
    title.textContent = card.title;
    entry.append(art, title);
    entry.addEventListener("click", () => {
      if (!session.browseCard(card.id)) return;
      sound.unlock();
      galleryScroll = contentScroll.scrollTop;
      galleryReturnButton = entry;
      reveal(card, false);
    });
    grid.append(entry);
    if (observer) observer.observe(entry);
  }
}

element("start").addEventListener("click", () => {
  sound.unlock();
  if (session.start()) render(true);
});
element("back").addEventListener("click", () => {
  if (!session.back(current.index)) return;
  clearTimeout(advanceTimer);
  advanceTimer = null;
  render(true);
});
element("open-gallery").addEventListener("click", () => {
  const returning = current.viewingGalleryCard;
  if (!session.openGallery()) return;
  resetResultEffects();
  mountGallery();
  render(true);
  if (returning && galleryReturnButton) {
    focus(galleryReturnButton);
    contentScroll.scrollTop = galleryScroll;
  }
});
element("close-gallery").addEventListener("click", () => {
  if (!session.closeGallery()) return;
  sound.unlock();
  reveal(session.view().result, false);
});
element("restart").addEventListener("click", () => {
  if (!session.restart()) return;
  resetResultEffects();
  render(true);
});

render(false);
setLayout();
setContainerInsets();
element("start-hint").hidden = true;
element("start").hidden = false;


})();
