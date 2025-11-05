// 古诗数据
const poems = [{
    'chinese': '山有木兮木有枝，心悦君兮君不知。',
    'english': 'The mountain has trees, and the trees have no branches; I love you, but you do not know.'
}, {
    'chinese': '晓看天色暮看云，行也思君，坐也思君。',
    'english': "I gaze at the sky at dawn and the clouds at dusk ; whether I'm walking or sitting, I think of you."
}, {
    'chinese': '曾经沧海难为水，除却巫山不是云。',
    'english': "Once you've seen the ocean, other waters seem insignificant; once you've beheld the clouds of Wushan, other clouds seem pale in comparison."
}, {
    'chinese': '入我相思门，知我相思苦。',
    'english': 'Enter the gate of my longing, and you will know the bitterness of my longing.'
}, {
    'chinese': '十年生死两茫茫，不思量，自难忘。',
    'english': 'Ten years have passed, and we are separated by life and death. I try not to think of you, but I cannot forget you.'
}, {
    'chinese': '玲珑骰子安红豆，入骨相思知不知。',
    'english': 'A delicate die holds a red bean, a symbol of deep longing that penetrates to the bone.'
}, {
    'chinese': '只愿君心似我心，定不负相思意。',
    'english': 'I only wish your heart were like mine, then I would never betray your love.'
}, {
    'chinese': '平生不会相思，才会相思，便害相思。',
    'english': 'I never knew what longing was, but now that I do, I am consumed by it .'
}, {
    'chinese': '两情若是久长时，又岂在朝朝暮暮。',
    'english': 'If love between two people is meant to last, why should they be together every day and night?'
}, {
    'chinese': '从此无心爱良夜，任他明月下西楼。',
    'english': 'From then on, I lost all interest in the beautiful nights, letting the bright moon descend to the west.'
}, {
    'chinese': '山无陵，江水为竭，冬雷震震，夏雨雪，天地合，乃敢与君绝。',
    'english': 'Until the mountains crumble, the rivers run dry, winter thunder roars , summer snow falls, and heaven and earth unite, only then will I part from you.'
}, {
    'chinese': '似此星辰非昨夜，为谁风露立中宵。',
    'english': 'The stars tonight are not those of last night; for whom do I stand in the wind and dew all night?'
}, {
    'chinese': '身无彩凤双飞翼，心有灵犀一点通。',
    'english': 'Though we lack the wings of a phoenix to fly together, our hearts are connected by a single thread of understanding.'
}, {
    'chinese': '伤心桥下春波绿，曾是惊鸿照影来。',
    'english': "Beneath the Bridge of Sorrow, spring waves ripple green, where once a fleeting beauty's reflection lingered."
}, {
    'chinese': '夜月一帘幽梦，春风十里柔情。',
    'english': 'A curtain of dreams under the moonlit night, ten miles of tender feelings in the spring breeze.'
}, {
    'chinese': '花自飘零水自流。一种相思，两处闲愁。',
    'english': 'Flowers drift and fall, water flows on. One longing, two places of sorrow.'
}, {
    'chinese': '取次花丛懒回顾，半缘修道半缘君。',
    'english': "I'm too lazy to look back at the flowers, half for cultivating the Tao, half for you."
}, {
    'chinese': '南风知我意，吹梦到西洲。',
    'english': 'The south wind knows my heart, blowing my dreams to the western continent.'
}, {
    'chinese': '衣带渐宽终不悔，为伊消得人憔悴。',
    'english': 'I grow thinner and thinner, yet I have no regrets, for I am wasting away for her sake.'
}, {
    'chinese': '怕相思，已相思，轮到相思没处辞，眉间露一丝。',
    'english': "I fear longing, yet I already long for you; when longing comes, there's nowhere to hide, a trace of it showing between my brows."
}, {
    'chinese': '愿得一心人，白头不相离。',
    'english': 'I wish to find someone who loves me wholeheartedly, and stay with me until our hair turns white.'
}, {
    'chinese': '一日不见兮，思之如狂。',
    'english': "I miss him terribly if I don't see him for a day."
}, {
    'chinese': '问世间，情是何物，直教生死相许？',
    'english': 'What is love in this world that makes people willing to die for it?'
}, {
    'chinese': '直道相思了无益，未妨惆怅是清狂。',
    'english': 'I know that longing is futile, but my melancholy is a kind of unbridled madness.'
}, {
    'chinese': '相恨不如潮有信，相思始觉海非深。',
    'english': 'Hatred is not as reliable as the tide, and longing makes one realize that the sea is not deep enough.'
}, {
    'chinese': '落花人独立，微雨燕双飞。',
    'english': 'A lone figure stands amidst falling blossoms, while swallows fly in pairs in the light rain.'
}, {
    'chinese': '月上柳梢头，人约黄昏后。',
    'english': 'The moon rises above the willow branches, and we meet after dusk.'
}, {
    'chinese': '红酥手，黄縢酒，满城春色宫墙柳。',
    'english': 'Red, delicate hands, yellow wine, spring colors fill the city, willows line the palace walls.'
}, {
    'chinese': '泪眼问花花不语，乱红飞过秋千去。',
    'english': 'With tearful eyes, I ask the flowers, but they remain silent; scattered petals fly past the swing.'
}, {
    'chinese': '若是前生未有缘，待重结、来生愿。',
    'english': 'If we were not destined to be together in our past lives, let us wait to renew our vows in the next.'
}, {
    'chinese': '若似月轮终皎洁，不辞冰雪为卿热。',
    'english': 'If you remain as bright and pure as the moon, I would brave ice and snow for your sake.'
}, {
    'chinese': '金风玉露一相逢，便胜却人间无数。',
    'english': 'A single encounter in the golden autumn breeze and jade dew surpasses countless encounters in the mortal world.'
}, {
    'chinese': '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳。',
    'english': 'Who feels the chill of the west wind alone? Rustling yellow leaves close the sparse window, lost in thought of the past, I stand in the setting sun.'
}, {
    'chinese': '海水梦悠悠，君愁我亦愁。',
    'english': "The sea's waves drift endlessly, and your sorrow is my sorrow too."
}, {
    'chinese': '桃之夭夭，灼灼其华。',
    'english': 'The peach tree is young and tender , its blossoms are bright and beautiful.'
}, {
    'chinese': '心似双丝网，中有千千结。',
    'english': 'My heart is like a double-stranded net, with thousands of knots within.'
}, {
    'chinese': '欲寄彩笺兼尺素，山长水阔知何处？',
    'english': 'I long to send you a letter, but the mountains are high and the rivers are wide, so where can I send it?'
}, {
    'chinese': '此后锦书休寄，画楼云雨无凭。',
    'english': 'From now on, I will no longer send letters, and the romantic encounters in the painted pavilion will be meaningless.'
}, {
    'chinese': '系我一生心，负你千行泪。',
    'english': 'My heart is bound to you for life, yet I bear the burden of a thousand lines of tears for you.'
}, {
    'chinese': '相思相见知何日？此时此夜难为情！',
    'english': 'When will we meet again, my love? This night, I am overwhelmed with longing!'
}, {
    'chinese': '多情却被无情恼，今夜还如昨夜长。',
    'english': 'The affectionate are troubled by the heartless; tonight is as long as last night.'
}, {
    'chinese': '今宵剩把银釭照，犹恐相逢是梦中。',
    'english': "Tonight, I'll light the silver lamp again , still fearing our meeting is but a dream."
}, {
    'chinese': '天涯地角有穷时，只有相思无尽处。',
    'english': 'The ends of the earth may be reached, but the longing for you is endless.'
}, {
    'chinese': '吴山青，越山青，两岸青山相送迎，谁知离别情？',
    'english': 'The mountains of Wu are green, the mountains of Yue are green, the green mountains on both sides of the river bid farewell and welcome, who knows the sorrow of parting.'
}, {
    'chinese': '红豆生南国，春来发几枝。',
    'english': 'Red beans grow in the south; how many branches will sprout in spring?'
}, {
    'chinese': '肠已断，泪难收。相思重上小红楼。',
    'english': 'My heart is broken, my tears are hard to hold back. Longing for you, I climb the little red building again.'
}, {
    'chinese': '琵琶弦上说相思。当时明月在，曾照彩云归。',
    'english': 'The pipa strings express longing. The bright moon was there then, shining on the returning colorful clouds.'
}, {
    'chinese': '相见时难别亦难，东风无力百花残。',
    'english': 'Meeting is difficult, parting is even more so; the east wind is powerless, and the flowers are withered.'
}, {
    'chinese': '恨君不似江楼月，南北东西，南北东西，只有相随无别离。',
    'english': 'I hate that you are not like the moon over the river tower, always by my side, never to be separated.'
}, {
    'chinese': '斑竹枝，斑竹枝，泪痕点点寄相思。',
    'english': 'Spotted bamboo branches, spotted bamboo branches, tear-stained spots convey longing.'
}, {
    'chinese': '曾与美人桥上别，恨无消息到今朝。',
    'english': 'I parted ways with the beauty on the bridge, and I have not heard from her since.'
}, {
    'chinese': '多情只有春庭月，犹为离人照落花。',
    'english': 'Only the moon in the spring courtyard is sentimental, still shining on the fallen flowers for those who are parted.'
}, {
    'chinese': '换我心，为你心，始知相忆深。',
    'english': 'If I could exchange my heart for yours, I would know how deep my longing for you is.'
}, {
    'chinese': '侯门一入深如海，从此萧郎是路人。',
    'english': "Once you enter the gates of a noble family, it's like entering a deep sea; from then on, your beloved is just a stranger."
}, {
    'chinese': '折花枝，恨花枝，准拟花开人共卮，开时人去时。',
    'english': 'I pluck a flower branch, I hate the flower branch, I planned to share a cup with you when the flower blooms , but when it blooms, you are gone.'
}, {
    'chinese': '天长地久有时尽，此恨绵绵无绝期。',
    'english': 'Heaven and earth may pass away, but this sorrow will last forever.'
}, {
    'chinese': '青青子衿，悠悠我心。',
    'english': 'Green are your robes , green is my heart.'
}, {
    'chinese': '得成比目何辞死，愿作鸳鸯不羡仙。',
    'english': '"To become a pair of mandarin ducks, I would gladly die; I would rather be a pair of mandarin ducks than an immortal."'
}, {
    'chinese': '相思只在，丁香枝上，豆蔻梢头。',
    'english': 'Longing resides only on the lilac branch and the cardamom tip.'
}, {
    'chinese': '云中谁寄锦书来？雁字回时，月满西楼。',
    'english': 'Who sends a letter from the clouds? When the wild geese return, the moon will be full over the western tower.'
}, {
    'chinese': '多情自古伤离别，更那堪，冷落清秋节！',
    'english': 'Parting has always been painful for those with deep feelings, and it is even more unbearable on this desolate autumn day!'
}, {
    'chinese': '墙头马上遥相顾，一见知君即断肠。',
    'english': 'We gaze at each other from across the wall and on horseback, and upon seeing you, I know my heart is broken.'
}, {
    'chinese': '日日思君不见君，共饮长江水。',
    'english': 'I think of you every day, but I cannot see you; we drink from the same Yangtze River.'
}, {
    'chinese': '相寻梦里路，飞雨落花中。',
    'english': 'Seeking the path in my dreams, amidst flying rain and falling flowers.'
}, {
    'chinese': '生当复来归，死当长相思。',
    'english': 'If I live, I will return; if I die, I will forever yearn for you.'
}, {
    'chinese': '欲把相思说似谁，浅情人不知。',
    'english': 'To whom can I express my longing? Only a shallow-hearted person would understand.'
}, {
    'chinese': '结发为夫妻，恩爱两不疑。',
    'english': 'We became husband and wife, and our love for each other is unwavering.'
}, {
    'chinese': '皑如山上雪，皎若云间月。',
    'english': 'White as snow on the mountain, bright as the moon in the clouds.'
}, {
    'chinese': '盈盈一水间，脉脉不得语。',
    'english': 'Separated by a mere stream, we gaze at each other silently, unable to speak.'
}, {
    'chinese': '将你从前与我心，付与他人可。',
    'english': 'You can give your heart, which once belonged to me, to someone else.'
}, {
    'chinese': '凄凉别后两应同，最是不胜清怨月明中。',
    'english': 'sorrow after parting , and the most unbearable feeling is the clear resentment under the bright moon .'
}, {
    'chinese': '忆君心似西江水，日夜东流无歇时。',
    'english': 'My longing for you is like the waters of the West River, flowing eastward day and night without ceasing.'
}, {
    'chinese': '我心匪石，不可转也。',
    'english': 'My heart is not a stone, it cannot be turned.'
}, {
    'chinese': '孤灯不明思欲绝，卷帷望月空长叹。',
    'english': 'The lonely lamp flickers dimly, my thoughts are filled with despair; I roll up the curtain, gaze at the moon, and sigh endlessly.'
}, {
    'chinese': '既见君子，云胡不喜。',
    'english': 'Now that I have seen you, how could I not be happy?'
}, {
    'chinese': '相思本是无凭语，莫向花笺费泪行。',
    'english': 'Longing is a word without proof; do not waste tears on flowery stationery.'
}, {
    'chinese': '闻君有两意，故来相决绝。',
    'english': 'Hearing that you have two minds, I have come to sever our ties.'
}, {
    'chinese': '相思了无益，悔当初相见。',
    'english': 'Longing is futile; I regret ever meeting you.'
}, {
    'chinese': '桃花落，闲池阁。山盟虽在，锦书难托。',
    'english': 'Peach blossoms fall, the pavilion by the idle pond stands. The vows made on the mountain remain, but the letter cannot be sent.'
}, {
    'chinese': '但是相思莫相负，牡丹亭上三生路。',
    'english': 'But let us not betray our love, for we walk the path of three lifetimes at the Peony Pavilion.'
}, {
    'chinese': '庭有枇杷树，吾妻死之年所手植也，今已亭亭如盖矣。',
    'english': 'There is a loquat tree in the courtyard, which my wife planted in the year she died. Now it stands tall and spreading like a canopy.'
}, {
    'chinese': '梦入江南烟水路，行尽江南，不与离人遇。',
    'english': 'My dreams take me to the misty waterways of Jiangnan, but even after traveling all of Jiangnan, I do not meet the one I long for.'
}, {
    'chinese': '相思一夜情多少，地角天涯未是长。',
    'english': 'How much longing and passion can one night evoke? Even the ends of the earth are not far enough to express our feelings.'
}, {
    'chinese': '情不知所起，一往而深。',
    'english': 'Love arises without warning, and deepens with time .'
}, {
    'chinese': '相思似海深，旧事如天远。',
    'english': 'My longing for you is as deep as the sea, and the past is as distant as the sky.'
}, {
    'chinese': '我断不思量，你莫思量我。',
    'english': 'I will not think of you, and you should not think of me either.'
}, {
    'chinese': '再拜陈三愿：一愿郎君千岁，二愿妾身常健，三愿如同梁上燕，岁岁长相见。',
    'english': 'I bow again and make three wishes: First, that my beloved live a thousand years; second, that I remain healthy; and third, that we may be like swallows on the beam, meeting year after year.'
}, {
    'chinese': '无情不似多情苦。一寸还成千万缕。',
    'english': 'Heartlessness is not as painful as being deeply in love. A single inch can become a thousand threads.'
}, {
    'chinese': '关关雎鸠，在河之洲。窈窕淑女，君子好逑。',
    'english': "The ospreys cry, on the river's islet. A fair maiden, a gentleman's ideal ."
}, {
    'chinese': '一寸相思千万绪。人间没个安排处。',
    'english': "A single inch of longing evokes a thousand thoughts . There's nowhere in this world to find solace."
}, {
    'chinese': '鸳鸯被里成双夜，一树梨花压海棠。',
    'english': 'A pair of lovers sleep together under the quilt, while a pear tree in full bloom overshadows a crabapple tree.'
}, {
    'chinese': '花红易衰似郎意，水流无限似侬愁。',
    'english': "Flowers fade easily, like a lover's heart; water flows endlessly, like my sorrow."
}, {
    'chinese': '红楼隔雨相望冷，珠箔飘灯独自归。',
    'english': 'The red pavilion stands coldly in the rain, its curtains fluttering as the lamp returns alone.'
}, {
    'chinese': '情之所钟，虽丑不嫌。',
    'english': 'When love is in your heart, even ugliness is not a problem.'
}, {
    'chinese': '今夕何夕，见此良人？',
    'english': 'What night is this, to meet such a good man?'
}, {
    'chinese': '西园何限相思树，辛苦梅花候海棠。',
    'english': 'The West Garden is filled with countless acacia trees, while the plum blossoms patiently await the arrival of the crabapple blossoms.'
}, {
    'chinese': '执手相看泪眼，竟无语凝噎。',
    'english': 'Holding hands, they gazed at each other with tearful eyes, speechless and choked with emotion.'
}, {
    'chinese': '人到情多情转薄，而今真个不多情。',
    'english': 'As people become more sentimental, their feelings grow thinner; now, I truly have little sentimentality left.'
}, {
    'chinese': '相逢情便深，恨不相逢早。',
    'english': 'Our feelings deepened upon meeting ; I regret not meeting you sooner.'
}, {
    'chinese': '相见争如不见，有情何似无情。',
    'english': "It's better not to meet than to meet; it's better to be indifferent than to have feelings ."
}, {
    'chinese': '急雪乍翻香阁絮，轻风吹到胆瓶梅，心字已成灰。',
    'english': 'The sudden snowfall turned the fragrant pavilion into a flurry of fluff, and a gentle breeze carried the plum blossoms to the vase. My heart, however, has turned to ashes.'
}, {
    'chinese': '一生一代一双人，争教两处销魂。',
    'english': 'One lifetime, one generation, one pair of lovers, yet they are separated in two places, their souls yearning for each other .'
}, {
    'chinese': '天涯万一见温柔。',
    'english': 'You might just find tenderness at the ends of the earth.'
}, {
    'chinese': '身似浮云，心如飞絮，气若游丝。',
    'english': 'My body is like a floating cloud, my heart like a drifting catkin, and my breath like a wisp of smoke.'
}, {
    'chinese': '郎骑竹马来，绕床弄青梅。',
    'english': 'The boy rode a bamboo horse and played with green plums around the bed.'
}, {
    'chinese': '美人卷珠帘，深坐蹙蛾眉。',
    'english': 'A beautiful woman rolls up the beaded curtain, sits deep within, her brows furrowed .'
}, {
    'chinese': '春心莫共花争发，一寸相思一寸灰！',
    'english': 'Let not your heart bloom with the flowers, for every inch of longing turns to ashes!'
}, {
    'chinese': '别后不知君远近，触目凄凉多少闷。',
    'english': 'Since we parted, I have no idea how far you are; the sight of you fills me with sorrow and grief.'
}, {
    'chinese': '咫尺画堂深似海，忆来惟把旧书看，几时携手入长安？',
    'english': "The painted hall, though only a stone's throw away, feels as deep as the sea. In my memories, I can only read old books. When will we hold hands and go to Chang'an again?"
}, {
    'chinese': '西风多少恨，吹不散眉弯。',
    'english': 'The west wind carries so much sorrow, yet it cannot dispel the frown on my brow.'
}, {
    'chinese': '任凭弱水三千，我只取一瓢饮。',
    'english': 'Of all the waters in the world, I will only drink from one.'
}, {
    'chinese': '而今才道当时错，心绪凄迷。',
    'english': 'Only now do I realize my mistake back then, and my heart is filled with sorrow.'
}, {
    'chinese': '春蚕到死丝方尽，蜡炬成灰泪始干。',
    'english': 'The silkworm spins silk until its death, and the candle burns until it turns to ash.'
}, {
    'chinese': '上邪！我欲与君相知，长命无绝衰。',
    'english': 'Oh Heaven! I wish to be with you forever, our love lasting without end.'
}, {
    'chinese': '易求无价宝，难得有心郎。',
    'english': 'Priceless treasures are easy to find, but a loving husband is hard to come by.'
}, {
    'chinese': '我住长江头，君住长江尾。',
    'english': 'I live at the head of the Yangtze River, and you live at the tail of the Yangtze River.'
}, {
    'chinese': '怅恨不逢如意酒。寻思难值有情人。',
    'english': "I lament that I haven't found the perfect wine. I ponder that it's hard to find a true lover."
}, {
    'chinese': '朱弦断，明镜缺，朝露晞，芳时歇，白头吟，伤离别，努力加餐勿念妾，锦水汤汤，与君长诀！',
    'english': "The zither strings are broken, the mirror is shattered, the morning dew has dried, the fragrant season is over, I sing a lament for my white hair, grieving our parting. Eat well and don't think of me, the Jin River flows on and on, a final farewell to you !"
}, {
    'chinese': '枕前发尽千般愿，要休且待青山烂。',
    'english': "I make a thousand wishes before my pillow, but I'll rest only when the green hills crumble."
}, {
    'chinese': '君知妾有夫，赠妾双明珠。',
    'english': 'You know I have a husband, yet you still give me two bright pearls.'
}, {
    'chinese': '在天愿作比翼鸟，在地愿为连理枝。',
    'english': 'In heaven, we wish to be birds flying wing to wing; on earth, we wish to be trees with intertwined branches.'
}, {
    'chinese': '和羞走，倚门回首，却把青梅嗅。',
    'english': 'She walked away shyly , leaning against the door and turning back to smell the green plums.'
}, {
    'chinese': '由来碧落银河畔，可要金风玉露时。',
    'english': 'Originating from the banks of the Milky Way in the azure sky, it awaits the time of golden wind and jade dew.'
}, {
    'chinese': '看朱成碧思纷纷，憔悴支离为忆君。',
    'english': 'Seeing red as green, my thoughts are in turmoil; I am haggard and broken, all because of remembering you .'
}, {
    'chinese': '忽见陌头杨柳色，悔教夫婿觅封侯。',
    'english': 'Suddenly I saw the green of willows by the roadside, and I regretted urging my husband to seek fame and fortune.'
}, {
    'chinese': '锦瑟华年谁与度？',
    'english': 'With whom shall I spend these beautiful, carefree years?'
}, {
    'chinese': '油壁香车不再逢，峡云无迹任西东。',
    'english': 'The fragrant carriage with its painted walls will never be seen again, and the clouds over the gorge leave no trace, drifting east and west.'
}, {
    'chinese': '蒹葭苍苍，白露为霜。',
    'english': 'The reeds are green and lush, and the white dew has turned to frost.'
}, {
    'chinese': '知我意，感君怜，此情须问天。',
    'english': 'Knowing my heart, feeling your pity , this love must be questioned by Heaven.'
}, {
    'chinese': '汴水流，泗水流，流到瓜州古渡头。吴山点点愁。',
    'english': 'The Bian River flows, the Si River flows, flowing to the ancient ferry crossing at Guazhou. The Wu Mountains are dotted with sorrow.'
}, {
    'chinese': '夜夜相思更漏残，伤心明月凭阑干，想君思我锦衾寒。',
    'english': 'Night after night, I yearn for you as the night deepens; the bright moon shines sadly on my balustrade, and I think of you, my brocade quilt grows cold.'
}, {
    'chinese': '依旧桃花面，频低柳叶眉。',
    'english': 'Her face was still as beautiful as a peach blossom, and her eyebrows were often lowered like willow leaves.'
}, {
    'chinese': '老来多健忘，唯不忘相思。',
    'english': 'As one grows old, one becomes forgetful, but one never forgets the longing for love.'
}, {
    'chinese': '纤云弄巧，飞星传恨，银汉迢迢暗度。',
    'english': 'Delicate clouds weave patterns, shooting stars convey sorrow, and the Milky Way stretches far and wide in secret.'
}, {
    'chinese': '一寸柔肠情几许？薄衾孤枕，梦回人静，彻晓潇潇雨。',
    'english': 'How much tenderness does a heart hold? A thin quilt and a lonely pillow, dreams return to stillness, the rain falls softly until dawn.'
}, {
    'chinese': '碧云无渡碧天沉，是湖心，是侬心。',
    'english': 'Azure clouds drift endlessly across the azure sky, the heart of the lake is my heart.'
}, {
    'chinese': '思君如流水，何有穷已时。',
    'english': 'My longing for you is like flowing water, never- ending .'
}, {
    'chinese': '两鬓可怜青，只为相思老。',
    'english': 'My temples are sadly gray, all because of longing for you.'
}, {
    'chinese': '借问江潮与海水，何似君情与妾心？',
    'english': 'I ask the river tides and the sea, how do they compare to your feelings and my heart?'
}, {
    'chinese': '一种相思，两处闲愁。',
    'english': 'One longing, two places of sorrow.'
}, {
    'chinese': '晓风干，泪痕残。欲笺心事，独语斜阑。难，难，难！',
    'english': 'The morning breeze dries the tears, leaving only traces. I long to write down my thoughts, but I can only whisper them to myself by the railing . So difficult, so difficult, so difficult!'
}, {
    'chinese': '一寸相思一寸灰。',
    'english': 'An inch of longing turns to an inch of ashes.'
}, {
    'chinese': '肠断月明红豆蔻，月似当时，人似当时否？',
    'english': 'Heartbroken, the moon shines bright , red beans adorn the ground; the moon is as it was then, but are the people the same ?'
}, {
    'chinese': '千金纵买相如赋，脉脉此情谁诉。',
    'english': "Even if I could buy Sima Xiangru's poem with a thousand pieces of gold, to whom could I confide this tender feeling?"
}, {
    'chinese': '相见情已深，未语可知心。',
    'english': "Our feelings for each other ran deep upon meeting; we understood each other's hearts even without words."
}, {
    'chinese': '琴瑟在御，莫不静好。',
    'english': 'With music played and harmony enjoyed, all was peaceful and serene.'
}, {
    'chinese': '迢迢牵牛星，皎皎河汉女。',
    'english': 'The Cowherd and the Weaver Girl are separated by the Milky Way.'
}, {
    'chinese': '上言长相思，下言久离别。',
    'english': 'The first line speaks of longing and yearning , the second of long separation.'
}, {
    'chinese': '凭仗丹青重省识，盈盈，一片伤心画不成。',
    'english': 'Relying on painting to recall my past, I realize that my heart is filled with sorrow, which I cannot capture in a painting.'
}, {
    'chinese': '相思相望不相亲，天为谁春。',
    'english': 'We yearn for each other but cannot be together; for whom does spring bloom?'
}, {
    'chinese': '夜长争得薄情知？春初早被相思染。',
    'english': 'How can a long night reveal the heartless heart? Early spring is already tinged with longing.'
}, {
    'chinese': '眼波才动被人猜。',
    'english': 'The moment her eyes moved, her thoughts were already guessed.'
}, {
    'chinese': '也信美人终作土，不堪幽梦太匆匆。',
    'english': 'I also believe that beauty will eventually turn to dust , and I cannot bear that fleeting dreams are too ephemeral.'
}, {
    'chinese': '山盟虽在，锦书难托。',
    'english': 'The vows remain, but the letter cannot be sent.'
}, {
    'chinese': '人道海水深，不抵相思半。',
    'english': "Humans say the sea is deep, but it can't compare to half the depth of longing."
}, {
    'chinese': '天不老，情难绝。',
    'english': 'Heaven may never grow old, but our love will never end.'
}, {
    'chinese': '语已多，情未了，回首犹重道：记得绿罗裙，处处怜芳草。',
    'english': 'Words have been spoken, but feelings remain; looking back, I still say: I remember the green silk skirt, and how I cherished the fragrant grass everywhere.'
}, {
    'chinese': '美人赠我锦绣段，何以报之青玉案。',
    'english': 'A beautiful woman gifted me a piece of brocade; how can I repay her with a jade table?'
}, {
    'chinese': '静女其姝，俟我于城隅。',
    'english': 'A quiet and beautiful maiden awaits me at the city corner.'
}, {
    'chinese': '深知身在情长在，怅望江头江水声。',
    'english': 'Knowing full well that as long as I live, my feelings will endure, I gaze wistfully at the riverbank, listening to the sound of the flowing water.'
}, {
    'chinese': '不得哭，潜别离。',
    'english': 'Do not weep, for we must part in secret.'
}, {
    'chinese': '终日两相思。为君憔悴尽，百花时。',
    'english': 'We are separated by longing for each other all day long. I am wasting away for you, even when all the flowers are in bloom.'
}, {
    'chinese': '不茶不饭，不言不语，一味供他憔悴。',
    'english': 'She neither drank tea nor ate, nor spoke a word, but simply watched him grow haggard.'
}, {
    'chinese': '天长路远魂飞苦，梦魂不到关山难。',
    'english': 'The journey is long and the soul flies in anguish; even in dreams, the journey is difficult to reach the distant mountains and passes.'
}, {
    'chinese': '纵我不往，子宁不来？',
    'english': "Even if I don't go to you , why won't you come to me?"
}, {
    'chinese': '邂逅相遇，适我愿兮。',
    'english': 'A chance encounter, just as I wished.'
}, {
    'chinese': '何如薄幸锦衣郎，比翼连枝当日愿。',
    'english': 'How could a heartless, richly dressed man compare to the vows of being like birds flying wing to wing and branches intertwined on that day?'
}, {
    'chinese': '不知何事萦怀抱，醒也无聊，醉也无聊，梦也何曾到谢桥。',
    'english': 'I know not what troubles my heart, I am bored whether I am awake or drunk, and I never dream of Xie Bridge.'
}, {
    'chinese': '沅有芷兮澧有兰，思公子兮未敢言。',
    'english': 'The Yuan River has fragrant angelica , and the Li River has orchids; I think of my beloved , but dare not speak of it.'
}, {
    'chinese': '从今以往，勿复相思，相思与君绝！',
    'english': 'From this day forward, I will no longer yearn for you; my love for you is over!'
}, {
    'chinese': '天南地北双飞客，老翅几回寒暑。',
    'english': 'Flying across the north and south, their old wings have weathered many winters and summers.'
}, {
    'chinese': '日日花前常病酒，敢辞镜里朱颜瘦。',
    'english': 'I often fall ill from drinking wine while surrounded by flowers every day, yet I dare not complain about my rosy cheeks growing thin in the mirror.'
}, {
    'chinese': '涉江采芙蓉，兰泽多芳草。',
    'english': 'I wade across the river to pick lotus blossoms, and find many fragrant herbs in the orchid-filled marshland.'
}, {
    'chinese': '何以致契阔？绕腕双跳脱。',
    'english': 'How can we achieve a lasting bond ? By wrapping our wrists together and letting the double wrists twitch .'
}, {
    'chinese': '雁字无多，写得相思几许。',
    'english': 'The wild geese fly in few lines, yet they convey so much longing and yearning.'
}, {
    'chinese': '渡头杨柳青青，枝枝叶叶离情。',
    'english': 'The willows by the ferry are green, their branches and leaves carrying the sorrow of parting.'
}, {
    'chinese': '长相思，长相思。',
    'english': 'Longing for you, longing for you.'
}, {
    'chinese': '一尺深红胜曲尘，天生旧物不如新。',
    'english': 'A foot of deep red surpasses the dust of the winding path ; old things are never as good as new.'
}, {
    'chinese': '红笺小字，说尽平生意。',
    'english': 'Small characters on red paper tell the whole story of my life.'
}, {
    'chinese': '奉劝世间夫妇，固不可彼此相仇，亦不可过于情笃。',
    'english': 'I advise couples in the world that they should neither hate each other nor be overly affectionate.'
}, {
    'chinese': '南有乔木，不可休思；汉有游女，不可求思。',
    'english': 'There are tall trees in the south, but I cannot rest there; there are beautiful women on the Han River, but I cannot pursue them.'
}, {
    'chinese': '谁料同心结不成，翻就相思结。',
    'english': 'Who would have thought that instead of forming a knot of love, it would become a knot of longing ?'
}, {
    'chinese': '清风明月苦相思，荡子从戎十载馀。',
    'english': 'The gentle breeze and bright moon evoke bitter longing; the wanderer has served in the army for over ten years .'
}, {
    'chinese': '上穷碧落下黄泉，两处茫茫皆不见。',
    'english': 'I searched high and low, from the heavens to the depths of hell, but found nothing.'
}, {
    'chinese': '红泪偷垂，满眼春风百事非。',
    'english': 'Tears secretly fall, a spring breeze fills the eyes, yet everything seems amiss.'
}, {
    'chinese': '空床卧听南窗雨，谁复挑灯夜补衣。',
    'english': 'Lying alone in bed, I listen to the rain outside the south window; who will mend my clothes by lamplight at night?'
}, {
    'chinese': '同心而离居，忧伤以终老。',
    'english': 'Though we share the same heart, we live apart, and we will grow old in sorrow.'
}, {
    'chinese': '一夜相思，水边清浅横枝瘦。',
    'english': 'A night of longing, by the shallow water, a slender branch lies across the water.'
}, {
    'chinese': '我欲与君相知，长命无绝衰。',
    'english': 'I wish to be with you forever, through thick and thin.'
}, {
    'chinese': '梦随风万里，寻郎去处，又还被、莺呼起。',
    'english': 'My dreams drift with the wind for miles, searching for my beloved, only to be awakened by the warbling of orioles.'
}, {
    'chinese': '若问相思甚了期，除非相见时。',
    'english': 'If you ask when this longing will end, it will only end when we meet again.'
}, {
    'chinese': '记得那年花下，深夜，初识谢娘时。',
    'english': 'I remember that year, under the flowers, late at night, when I first met Xie Niang.'
}, {
    'chinese': '驿寄梅花，鱼传尺素。',
    'english': 'Plum blossoms are sent by post, and letters are carried by fish.'
}, {
    'chinese': '教人无处寄相思，落花芳草过前期，没人知。',
    'english': "There's nowhere to send my longing; fallen flowers and fragrant grasses have passed, and no one knows."
}, {
    'chinese': '浅情终似，行云无定，犹到梦魂中。',
    'english': 'Shallow feelings are like drifting clouds, unpredictable and ever-present, still lingering in dreams.'
}, {
    'chinese': '君为女萝草，妾作菟丝花。',
    'english': 'You are the dodder vine, and I am the crested vine .'
}, {
    'chinese': '君在阴兮影不见，君依光兮妾所愿。',
    'english': 'When you are in the shadows, I cannot see your shadow ; when you are in the light, that is my wish.'
}, {
    'chinese': '当君怀归日，是妾断肠时。',
    'english': 'When you long to return home, it is when my heart breaks.'
}, {
    'chinese': '纵豆蔻词工，青楼梦好，难赋深情。',
    'english': "Even with skillful lyrics and beautiful dreams of brothels, it's difficult to express deep feelings."
}, {
    'chinese': '高情已逐晓云空。不与梨花同梦。',
    'english': 'My lofty sentiments have already vanished with the morning clouds. I no longer dream with the pear blossoms.'
}, {
    'chinese': '长相思，摧心肝。',
    'english': 'Longing for you, my heart is breaking.'
}, {
    'chinese': '昔日戏言身后意，今朝都到眼前来。',
    'english': 'What were once jokes about what would happen after death have now come to pass.'
}, {
    'chinese': '恨入空帷鸾影独，泪凝双脸渚莲光，薄情年少悔思量。',
    'english': "Hate fills the empty curtains , a lone phoenix's shadow; tears well up on my cheeks, reflecting the lotus's light; I regret my youthful infatuation."
}, {
    'chinese': '凤兮凤兮归故乡，遨游四海求其凰。',
    'english': 'Phoenix, oh phoenix, return to your homeland, roam the four seas in search of your mate .'
}, {
    'chinese': '渐写到别来，此情深处，红笺为无色。',
    'english': 'As I write of our separation, my emotions deepen, and the red paper turns colorless.'
}, {
    'chinese': '君泪盈，妾泪盈，罗带同心结未成，江边潮已平。',
    'english': 'Your tears flow , my tears flow, the knot of our hearts remains untied, and the tide on the river has already subsided.'
}, {
    'chinese': '红豆不堪看，满眼相思泪。',
    'english': 'Red beans are unbearable to look at, my eyes are filled with tears of longing.'
}, {
    'chinese': '记得绿罗裙，处处怜芳草。',
    'english': 'I remember the green silk skirt, and everywhere I looked , I cherished the fragrant grass.'
}, {
    'chinese': '君应有语：渺万里层云，千山暮雪，只影向谁去？',
    'english': 'You should have these words: Across ten thousand miles of layered clouds, amidst a thousand mountains covered in evening snow, to whom does this solitary figure turn?'
}, {
    'chinese': '佳人彩云里，欲赠隔远天。',
    'english': 'A beautiful woman is amidst colorful clouds, I wish to present her to her across the distant sky.'
}, {
    'chinese': '纵使相逢应不识，尘满面，鬓如霜。',
    'english': "Even if we met again, you wouldn't recognize me, my face covered in dust, my temples white as frost."
}, {
    'chinese': '情知此后来无计，强说欢期。',
    'english': 'Knowing there was no way to change this, I forced myself to talk about a happy occasion.'
}, {
    'chinese': '不见去年人，泪湿春衫袖。',
    'english': 'The person from last year is nowhere to be seen; tears wet my spring robe sleeves.'
}, {
    'chinese': '一语不入意，从君万曲梁尘飞。',
    'english': 'A single word that displeases you is enough to send a thousand songs flying like dust from the rafters.'
}, {
    'chinese': '寻常百种花齐发，偏摘梨花与白人。',
    'english': 'Amidst the myriad flowers in bloom, I alone pluck the pear blossoms and the white-haired maiden.'
}, {
    'chinese': '十八年来堕世间，吹花嚼蕊弄冰弦。',
    'english': 'For eighteen years I have been living in this world, playing with flowers, chewing stamens, and playing the icy strings.'
}, {
    'chinese': '中心藏之，何日忘之！',
    'english': 'I will cherish it in my heart forever!'
}, {
    'chinese': '无处不伤心，轻尘在玉琴。',
    'english': 'Heartbreak is everywhere, even the light dust settles on the jade zither .'
}, {
    'chinese': '刘郎已恨蓬山远，更隔蓬山一万重！',
    'english': "Liu Lang already lamented the distance to Penglai Mountain, but now it's separated by ten thousand more mountains!"
}, {
    'chinese': '纵被无情弃，不能羞。',
    'english': 'Even if I am cruelly abandoned, I will not feel ashamed.'
}, {
    'chinese': '虽则如云，匪我思存。',
    'english': 'Though they are like clouds, they are not what I desire.'
}, {
    'chinese': '怕人寻问，咽泪装欢。',
    'english': 'Afraid of being questioned, she swallowed her tears and pretended to be happy.'
}, {
    'chinese': '昔时横波目，今作流泪泉。',
    'english': 'The eyes that once sparkled with passion are now a fountain of tears.'
}, {
    'chinese': '逢郎欲语低头笑，碧玉搔头落水中。',
    'english': 'She wanted to speak to her lover, but lowered her head and smiled, causing her jade hairpin to fall into the water.'
}, {
    'chinese': '相思无因见，怅望凉风前。',
    'english': 'Unable to meet you despite my longing, I gaze wistfully into the cool breeze.'
}, {
    'chinese': '梦断香消四十年，沈园柳老不吹绵。',
    'english': 'Forty years have passed since the dream ended and the fragrance faded; the willows in Shenyuan Garden are old and no longer shed their catkins.'
}, {
    'chinese': '美人迈兮音尘阙，隔千里兮共明月。',
    'english': 'The beauty has departed, her voice and traces gone; though separated by a thousand miles, we share the same bright moon .'
}, {
    'chinese': '尚想旧情怜婢仆，也曾因梦送钱财。',
    'english': 'He still cherished the old affection for his servants and maids, and even sent them money in a dream.'
}, {
    'chinese': '流水便随春远，行云终与谁同。',
    'english': 'The flowing water fades with spring, and the drifting clouds have no companion in the end.'
}, {
    'chinese': '不见又思量，见了还依旧。',
    'english': "When I don't see you, I miss you; when I do see you, things remain the same."
}, {
    'chinese': '茫茫碧落，天上人间情一诺。',
    'english': 'Under the vast blue sky, a promise of love transcends heaven and earth.'
}, {
    'chinese': '闲坐悲君亦自悲，百年都是几多时。',
    'english': 'Sitting idly, I grieve for you and for myself; how fleeting is a hundred years?'
}, {
    'chinese': '终日望君君不至，举头闻鹊喜。',
    'english': "All day I waited for you, but you did not come; I looked up and heard the magpie's joyful cry."
}, {
    'chinese': '芭蕉不展丁香结。',
    'english': 'The banana leaves remain unfurled, and the cloves are still in bud.'
}, {
    'chinese': '毕竟不成眠，一夜长如岁。',
    'english': 'After all, sleeplessness makes the night feel like an eternity.'
}, {
    'chinese': '孔雀东南飞，五里一徘徊。',
    'english': 'The peacock flies southeast, pausing every five miles .'
}, {
    'chinese': '别来半岁音书绝，一寸离肠千万结。',
    'english': 'Half a year has passed since we parted, and I have not heard a word from you. My heart is filled with countless knots of longing.'
}, {
    'chinese': '人面不知何处，绿波依旧东流。',
    'english': 'Where are those faces now? The green waves still flow eastward.'
}, {
    'chinese': '最关情，折尽梅花，难寄相思。',
    'english': "What I feel most deeply is that even if all the plum blossoms are broken, it's still difficult to convey my longing."
}, {
    'chinese': '情知已被山遮断，频倚阑干不自由。',
    'english': 'Knowing that the mountains have blocked my way, I lean on the railing again and again, feeling utterly helpless.'
}, {
    'chinese': '绸缪束薪，三星在天。',
    'english': 'With careful planning and preparation, the three stars shine in the sky.'
}, {
    'chinese': '蓬山此去无多路，青鸟殷勤为探看。',
    'english': 'The journey to Pengshan is not far; the bluebird diligently goes to explore.'
}, {
    'chinese': '有所思，乃在大海南。',
    'english': 'My thoughts are on the South China Sea.'
}, {
    'chinese': '枫叶千枝复万枝，江桥掩映暮帆迟。',
    'english': 'Maple leaves cover thousands upon thousands of branches, and the river bridge is shrouded in the twilight as sails linger.'
}, {
    'chinese': '晓镜但愁云鬓改，夜吟应觉月光寒。',
    'english': 'Looking in the mirror at dawn, I worry about my changing hair; reciting poetry at night, I feel the cold moonlight.'
}, {
    'chinese': '七月七日长生殿，夜半无人私语时。',
    'english': 'On the seventh day of the seventh month, in the Hall of Eternal Life, at midnight when no one was around, they whispered among themselves.'
}, {
    'chinese': '千里孤坟，无处话凄凉。',
    'english': 'A lonely grave a thousand miles away, nowhere to speak of my sorrow.'
}, {
    'chinese': '柔情似水，佳期如梦，忍顾鹊桥归路！',
    'english': 'Tender feelings flow like water, a beautiful time like a dream, how can I bear to look back on the road to the Magpie Bridge!'
}, {
    'chinese': '不见合欢花，空倚相思树。',
    'english': 'I see no mimosa blossoms, only the acacia tree I long for .'
}, {
    'chinese': '雨歇微凉，十一年前梦一场。',
    'english': "The rain has stopped and the air is slightly cool; it's like a dream from eleven years ago."
}, {
    'chinese': '妾拟将身嫁与，一生休。',
    'english': 'I intend to marry him and spend my life with him.'
}, {
    'chinese': '相思已是不曾闲，又那得、工夫咒你。',
    'english': 'My longing for you has never ceased, so how could I possibly have the time to curse you?'
}, {
    'chinese': '东风恶，欢情薄。',
    'english': 'The east wind is cruel, and our joy is fleeting.'
}, {
    'chinese': '合欢桃核终堪恨，里许元来别有人。',
    'english': 'The peach pit of the mimosa tree is truly hateful; it turns out there was someone else there all along.'
}, {
    'chinese': '相顾无言，惟有泪千行。',
    'english': 'They gazed at each other speechlessly, tears streaming down their faces.'
}, {
    'chinese': '残月出门时，美人和泪辞。',
    'english': 'As the waning moon rose, the beauty departed with tears in her eyes.'
}, {
    'chinese': '梧桐更兼细雨，到黄昏、点点滴滴。',
    'english': 'The wutong tree, accompanied by a light drizzle, drips and drops until dusk.'
}, {
    'chinese': '鱼书经岁绝，烛泪流残月。',
    'english': "The letter from the fish has been lost for years, and the candle's tears flow under the waning moon."
}, {
    'chinese': '肥水东流无尽期。当初不合种相思。',
    'english': 'The fertile waters flow eastward endlessly. It would have been wrong to sow seeds of longing in the first place.'
}, {
    'chinese': '春蚕不应老，昼夜常怀丝。',
    'english': 'The silkworm should not grow old; it keeps spinning silk day and night.'
}, {
    'chinese': '不信比来长下泪，开箱验取石榴裙。',
    'english': "If you don't believe me, I'll stop crying now and then. Open the box and examine the pomegranate skirt ."
}, {
    'chinese': '南来飞燕北归鸿，偶相逢，惨愁容。',
    'english': 'Swallows flying south and wild geese returning north meet by chance, their faces etched with sorrow.'
}, {
    'chinese': '相思难表，梦魂无据，惟有归来是。',
    'english': 'My longing is hard to express, my dreams are unreliable, only returning home will suffice.'
}, {
    'chinese': '相去万余里，各在天一涯。',
    'english': 'They are separated by more than ten thousand miles, each at the ends of the earth .'
}, {
    'chinese': '清晨帘幕卷轻霜，呵手试梅妆。',
    'english': 'At dawn, the curtains are rolled up to reveal a light frost; I warm my hands to try on plum blossom makeup.'
}, {
    'chinese': '几回花下坐吹箫，银汉红墙入望遥。',
    'english': "Several times I've sat beneath the flowers, playing the flute, the Milky Way and red walls stretching into the distance."
}, {
    'chinese': '四月十七，正是去年今日，别君时。',
    'english': 'April 17th, exactly the day I parted from you last year .'
}, {
    'chinese': '欲得周郎顾，时时误拂弦。',
    'english': "To win Zhou Yu's favor, one must often mistakenly pluck the strings."
}, {
    'chinese': '为君憔悴尽，百花时。',
    'english': "I've grown thin and pale for you, even when all the flowers are in bloom."
}, {
    'chinese': '归去来，玉楼深处，有个人相忆。',
    'english': 'Returning home, deep within the jade tower, there is someone who remembers me.'
}, {
    'chinese': '一怀愁绪，几年离索。错、错、错。',
    'english': 'A heart full of sorrow, years of separation. Wrong, wrong, wrong.'
}, {
    'chinese': '待来竟不来，落花寂寂委青苔。',
    'english': 'They waited, but they did not come; fallen flowers lay silently on the green moss.'
}, {
    'chinese': '暗相思，无处说，惆怅夜来烟月。',
    'english': 'I secretly yearn for you, but have nowhere to express it; I am filled with sorrow as the moon shines through the night.'
}, {
    'chinese': '山无陵，江水为竭。',
    'english': 'Mountains crumble, rivers run dry.'
}, {
    'chinese': '来是空言去绝踪，月斜楼上五更钟。',
    'english': 'They came with empty words and left without a trace ; the moon slants as the fifth watch bell tolls from the tower.'
}, {
    'chinese': '劝我早归家，绿窗人似花。',
    'english': 'They urged me to return home early, for the woman by the green window is as beautiful as a flower.'
}, {
    'chinese': '等闲妨了绣功夫，笑问鸳鸯两字怎生书？',
    'english': 'It casually interrupted my embroidery work, and I jokingly asked how to write the two characters for "mandarin ducks".'
}, {
    'chinese': '花明月暗笼轻雾，今宵好向郎边去。',
    'english': "Flowers bloom bright, moon is dim, shrouded in light mist; tonight I shall go to my lover's side."
}, {
    'chinese': '出入君怀袖，动摇微风发。',
    'english': 'It moves in and out of your embrace, stirred by the gentle breeze.'
}, {
    'chinese': '忆昔花间相见后，只凭纤手，暗抛红豆。',
    'english': 'I remember when we met among the flowers, I secretly tossed red beans with my slender hand .'
}, {
    'chinese': '十五年前花月底，相从曾赋赏花诗。',
    'english': 'Fifteen years ago, at the end of the month, we composed poems together to appreciate the flowers.'
}, {
    'chinese': '妾弄青梅凭短墙，君骑白马傍垂杨。',
    'english': 'I play with green plums by the low wall, while you ride a white horse beside the weeping willows.'
}, {
    'chinese': '梦为远别啼难唤，书被催成墨未浓。',
    'english': 'My dreams are filled with the pain of parting, and I cannot call back my beloved; the book is hastily written, but the ink is not yet thick.'
}, {
    'chinese': '窈窕淑女，君子好逑。',
    'english': "A beautiful and graceful woman is the object of a gentleman's affections ."
}, {
    'chinese': '泪滴千千万万行，更使人、愁肠断。',
    'english': 'Countless tears fall, causing even more heartache and sorrow.'
}, {
    'chinese': '同穴窅冥何所望，他生缘会更难期。',
    'english': 'What hope is there in the dark and desolate grave ? And the chance of meeting again in the next life is even more uncertain.'
}, {
    'chinese': '待约个梅魂，黄昏月淡，与伊深怜低语。',
    'english': 'I await the arrival of a plum blossom spirit, at dusk when the moon is pale, to whisper tenderly with her .'
}, {
    'chinese': '总角之宴，言笑晏晏。信誓旦旦，不思其反。',
    'english': 'At their childhood banquet, they laughed and chatted merrily. They made solemn vows, never considering the possibility of betrayal.'
}, {
    'chinese': '相思黄叶落，白露湿青苔。',
    'english': 'Yellow leaves fall, a symbol of longing; white dew wets the green moss.'
}, {
    'chinese': '燕燕轻盈，莺莺娇软，分明又向华胥见。',
    'english': 'Swallows are light and graceful, orioles are delicate and soft; clearly, they are seeing Hua Xu again.'
}, {
    'chinese': '井底点灯深烛伊，共郎长行莫围棋。',
    'english': 'at the bottom of a well illuminates her deeply; let us walk together for a long time, without playing chess.'
}, {
    'chinese': '薄雾浓云愁永昼，瑞脑销金兽。',
    'english': 'A thin mist and thick clouds cast a pall over the long day; the incense burner burns out in the golden beast-shaped burner.'
}, {
    'chinese': '野有蔓草，零露漙兮。',
    'english': 'Wild grasses grow, glistening with dew.'
}, {
    'chinese': '所谓伊人，在水一方。',
    'english': 'The one I long for is on the other side of the water.'
}, {
    'chinese': '感君缠绵意，系在红罗襦。',
    'english': 'I feel your tender affection, which I tie to my red silk robe .'
}, {
    'chinese': '一怀愁绪，几年离索。',
    'english': 'A heart full of sorrow, years of separation.'
}, {
    'chinese': '走来窗下笑相扶，爱道画眉深浅入时无？',
    'english': 'They walked to the window, laughing and supporting each other, and asked, "Are your painted eyebrows fashionable?"'
}, {
    'chinese': '闻君有他心，拉杂摧烧之。',
    'english': 'Hearing that you have another love interest, I have to burn all the messy things .'
}, {
    'chinese': '应难奈，故人天际，望彻淮山，相思无雁足。',
    'english': 'It is unbearable that my beloved is far away, and I gaze across the Huai Mountains, longing for him but unable to reach him.'
}, {
    'chinese': '七夕今宵看碧霄，牵牛织女渡河桥。',
    'english': 'On this night of Qixi, we gaze at the azure sky as the Cowherd and the Weaver Girl cross the bridge over the Milky Way.'
}, {
    'chinese': '欲寄彩笺无尺素，山长水阔知何处？',
    'english': 'I long to send a letter, but have no paper to send; the mountains are high and the waters wide, where can I send it?'
}, {
    'chinese': '一面风情深有韵，半笺娇恨寄幽怀。',
    'english': 'A face full of charm and elegance, a half-written note conveying tender sorrow and hidden feelings.'
}, {
    'chinese': '宜言饮酒，与子偕老。',
    'english': 'Let us drink wine and grow old together.'
}, {
    'chinese': '既见君子，云何不乐。',
    'english': 'Now that I have seen you, how can I not be happy?'
}, {
    'chinese': '书中无别意，惟怅久离居。',
    'english': 'There is no other meaning in the book than the sorrow of being separated from loved ones for so long.'
}, {
    'chinese': '忆梅下西洲，折梅寄江北。',
    'english': 'I remember the plum blossoms on the western shore, and sent a broken plum blossom to the north bank of the river .'
}, {
    'chinese': '瘦应因此瘦，羞亦为郎羞。',
    'english': 'She is thin because of this , and ashamed because of her lover.'
}, {
    'chinese': '不知魂已断，空有梦相随。',
    'english': 'Unaware that his soul has already departed, only dreams remain to accompany him.'
}, {
    'chinese': '妾身悔作商人妇，妾命当逢薄幸夫。',
    'english': "I regret being born a merchant's wife; my fate is to be with a heartless husband."
}, {
    'chinese': '山桃红花满上头，蜀江春水拍山流。',
    'english': 'Peach blossoms adorn the mountainside, while the spring waters of the Shu River lap against the mountainside.'
}, {
    'chinese': '纵我不往，子宁不嗣音？',
    'english': 'Even if I do not go , will you not send me a message?'
}, {
    'chinese': '月色入高楼，相思两处愁。',
    'english': 'The moonlight shines into the tall building, and longing fills both places with sorrow.'
}, {
    'chinese': '离愁渐远渐无穷，迢迢不断如春水。',
    'english': 'The sorrow of parting grows ever more distant and endless, flowing ceaselessly like the spring waters.'
}, {
    'chinese': '浆向蓝桥易乞，药成碧海难奔。',
    'english': 'to beg for water at the Blue Bridge , but difficult to reach the Azure Sea once medicine is made.'
}, {
    'chinese': '今夕何夕兮，搴舟中流。',
    'english': 'What night is this, that I row my boat midstream?'
}, {
    'chinese': '故攲单枕梦中寻，梦又不成灯又烬。',
    'english': 'So I lean on my pillow and search for it in my dreams, but the dream fails and the lamp goes out.'
}, {
    'chinese': '佳人独立相思苦。薄袖欺寒脩竹暮。',
    'english': 'A beautiful woman stands alone, suffering from lovesickness. Her thin sleeves shield her from the chill of the bamboo grove at dusk .'
}, {
    'chinese': '明月照相思，也得姮娥念我痴。',
    'english': "The bright moon shines on my longing, and even Chang'e (the moon goddess) thinks of my infatuation."
}, {
    'chinese': '同居长干里，两小无嫌猜。',
    'english': 'They lived together in Changgan Lane, and the two children had no suspicions of each other.'
}, {
    'chinese': '凝恨对残晖，忆君君不知。',
    'english': 'the setting sun, filled with resentment ; I remember you, but you know nothing of my feelings .'
}, {
    'chinese': '别梦依依到谢家，小廊回合曲阑斜。',
    'english': 'My dreams lingered as I returned to the Xie family home, where the winding corridors and slanting railings led me to their residence .'
}, {
    'chinese': '碧水浩浩云茫茫，美人不来空断肠。',
    'english': 'The blue waters are vast and the clouds are boundless; the beauty does not come, leaving only heartbreak.'
}, {
    'chinese': '大王意气尽，贱妾何聊生！',
    'english': "With the king's spirit broken, what reason is there for this lowly concubine to live ?"
}, {
    'chinese': '寄相思，寒雨灯窗，芙蓉旧院。',
    'english': 'Sending my longing thoughts, through the cold rain and lamplight by the window, in the old courtyard with hibiscus.'
}, {
    'chinese': '思君如陇水，长闻呜咽声。',
    'english': 'My longing for you is like the flowing water of Longxi, its mournful sound echoing endlessly.'
}, {
    'chinese': '水纹珍簟思悠悠，千里佳期一夕休。',
    'english': 'The ripples on the precious mat evoke endless thoughts; a thousand-mile journey ends in a single night .'
}, {
    'chinese': '若待得君来向此，花前对酒不忍触。',
    'english': 'If you were to come here, I would not bear to touch the flowers while drinking wine.'
}, {
    'chinese': '新来瘦，非干病酒，不是悲秋。',
    'english': "I've recently become thin, not from illness or alcohol, nor from the melancholy of autumn."
}, {
    'chinese': '昔日横波目，今成流泪泉。',
    'english': 'The eyes that once sparkled with passion are now a fountain of tears.'
}, {
    'chinese': '相逢不语，一朵芙蓉著秋雨。',
    'english': 'We met in silence, a lotus blossom bathed in autumn rain.'
}, {
    'chinese': '忆来何事最销魂，第一折枝花样画罗裙。',
    'english': 'What memory is most captivating? It is the first thing: a skirt adorned with the pattern of flowers on a broken branch.'
}, {
    'chinese': '红楼别夜堪惆怅，香灯半卷流苏帐。',
    'english': 'Parting from the Red Chamber on this night is truly melancholy; the incense lamp is half-rolled up, revealing the tasseled curtains.'
}, {
    'chinese': '怕郎猜道，奴面不如花面好。',
    'english': "I fear my husband might guess that my face is not as beautiful as a flower's."
}, {
    'chinese': '今年春尽，杨花似雪，犹不见还家。',
    'english': "Spring is ending this year, and the willow catkins are like snow, yet I still haven't returned home."
}, {
    'chinese': '腰中双绮带，梦为同心结。',
    'english': 'silk ribbons adorn her waist , their dreams intertwined in a knot of hearts.'
}, {
    'chinese': '此曲有意无人传，愿随春风寄燕然，忆君迢迢隔青天。',
    'english': 'This song is meant to be heard, but no one will pass it on. I wish it could travel with the spring breeze to Yanran, to remember you, who are far away across the blue sky.'
}, {
    'chinese': '东飞伯劳西飞燕，黄姑织女时相见。',
    'english': 'The shrike flies east and the swallow flies west; the Weaver Girl and the Weaver Girl meet from time to time.'
}, {
    'chinese': '人去秋千闲挂月，马停杨柳倦嘶风。',
    'english': 'The swing hangs idly by the moon , now that the person is gone ; the horse stops by the willow and neighs wearily in the wind.'
}, {
    'chinese': '归凤求凰意，寥寥不复闻。',
    'english': 'the phoenix to return to its mate is now rarely heard of.'
}, {
    'chinese': '上山采蘼芜，下山逢故夫。',
    'english': 'I went up the mountain to pick wild herbs , and on my way down I met my old husband .'
}, {
    'chinese': '梦入蓝桥，几点疏星映朱户。',
    'english': 'In my dream, I entered the Blue Bridge, where a few scattered stars reflected on the vermilion door.'
}, {
    'chinese': '买得一枝春欲放。',
    'english': 'I bought a branch of spring that is about to bloom.'
}, {
    'chinese': '忆君迢迢隔青天。昔时横波目，今作流泪泉。',
    'english': 'I remember you, so far away across the blue sky. Your eyes, once brimming with tenderness, are now a fountain of tears.'
}, {
    'chinese': '采之欲遗谁？所思在远道。',
    'english': 'For whom shall I gather these herbs? My thoughts are with someone far away.'
}, {
    'chinese': '岂知一夜秦楼客，偷看吴王苑内花。',
    'english': 'Little did they know that a visitor to the brothel would one night secretly admire the flowers in the garden of the King of Wu .'
}, {
    'chinese': '都道是金玉良姻，俺只念木石前盟。',
    'english': "Everyone says it's a perfect marriage , but I only remember the vow we made before we were married."
}, {
    'chinese': '谢公最小偏怜女，自嫁黔娄百事乖。',
    'english': "Xie Gong's youngest daughter was his favorite, but after she married Qian Lou, everything went wrong."
}, {
    'chinese': '静女其娈，贻我彤管。',
    'english': 'A quiet and beautiful maiden gave me a red writing brush.'
}, {
    'chinese': '此身行作稽山土，犹吊遗踪一泫然。',
    'english': 'Even as I become dust on Mount Kuaiji, I still weep for the traces of the past.'
}, {
    'chinese': '道路阻且长，会面安可知？',
    'english': 'The road is long and arduous ; how can we know when we will meet?'
}, {
    'chinese': '忆与君别年，种桃齐蛾眉。',
    'english': 'I remember the year we parted, when we planted peach trees that reached the level of our eyebrows.'
}, {
    'chinese': '薄幸郎君何日到，想自当初，莫要相逢好。',
    'english': 'When will my unfaithful lover arrive? Thinking back , it would have been better if we had never met.'
}, {
    'chinese': '枕前泪共阶前雨，隔个窗儿滴到明。',
    'english': 'on my pillow mingle with the rain on the steps , dripping through the window until dawn.'
}, {
    'chinese': '春心莫共花争发，一寸相思一寸灰。',
    'english': 'Do not let your heart bloom with the flowers, for every inch of longing turns to ashes.'
}, {
    'chinese': '新帖绣罗襦，双双金鹧鸪。',
    'english': 'A new embroidered silk robe, adorned with a pair of golden partridges.'
}, {
    'chinese': '须作一生拚，尽君今日欢。',
    'english': "We must dedicate our lives to making the most of today's joy."
}, {
    'chinese': '河汉清且浅，相去复几许。',
    'english': 'The Milky Way is clear and shallow, how far apart are we?'
}, {
    'chinese': '春来秋去相思在，秋去春来信息违。',
    'english': 'Spring comes and autumn goes, but longing remains; autumn goes and spring comes, but messages are lost .'
}, {
    'chinese': '人成各，今非昨，病魂常似秋千索。',
    'english': 'People are scattered, things are not what they used to be, and my sick soul is like a swing rope in autumn.'
}, {
    'chinese': '刘郎已恨蓬山远，更隔蓬山几万重。',
    'english': 'Liu Lang already lamented the distance to Penglai Mountain, now separated by tens of thousands of mountains.'
}, {
    'chinese': '掩妾泪，听君歌。',
    'english': 'I wipe away my tears and listen to your song.'
}, {
    'chinese': '无端隔水抛莲子，遥被人知半日羞。',
    'english': 'I threw lotus seeds across the water for no reason, and was ashamed for half a day when someone found out from afar.'
}, {
    'chinese': '今日斗酒会，明旦沟水头。',
    'english': "Today we drink together, tomorrow we 'll be at the ditch."
}, {
    'chinese': '兽炉沉水烟，翠沼残花片。一行写入相思传。',
    'english': 'The incense burner emits smoke from the sinking water , and petals of fallen flowers drift on the emerald pond . A single line is written into the tale of longing.'
}, {
    'chinese': '马滑霜浓，不如休去，直是少人行！',
    'english': "The frost is thick and slippery on the horses, so it's better to rest; few people travel this route!"
}, {
    'chinese': '为有云屏无限娇，凤城寒尽怕春宵。',
    'english': 'With its infinitely beautiful cloud screen, the Phoenix City fears the passing of spring nights even as the cold fades.'
}, {
    'chinese': '念佳人、音尘别后，对此应解相思。',
    'english': 'Thinking of my beloved, whom I have not heard from since we parted, I should understand the meaning of this longing.'
}, {
    'chinese': '鸳鸯俱是白头时，江南渭北三千里。',
    'english': 'When the mandarin ducks both turn white-headed, the distance between Jiangnan and Weibei is three thousand miles.'
}, {
    'chinese': '屏山遮断相思路，子规啼到无声处。',
    'english': "The screen mountain blocks my way, and the cuckoo's cry fades into silence ."
}, {
    'chinese': '不信妾肠断，归来看取明镜前。',
    'english': "If you don't believe my heart is breaking, come back and look in the mirror."
}, {
    'chinese': '女曰鸡鸣，士曰昧旦。',
    'english': 'The woman said, "The rooster crows," while the man said, "It\'s still dark . "'
}, {
    'chinese': '春思乱，芳心碎。',
    'english': 'Springtime thoughts are chaotic, and my heart is broken.'
}, {
    'chinese': '鸳鸯于飞，毕之罗之。',
    'english': 'Mandarin ducks fly together, but are caught in a net.'
}, {
    'chinese': '斑骓只系垂杨岸，何处西南任好风。',
    'english': 'The dappled horse is tethered to the willow bank, where the favorable southwest wind blows freely.'
}, {
    'chinese': '君当作磐石，妾当作蒲苇。',
    'english': 'You should be a rock, and I should be a reed.'
}, {
    'chinese': '柳色披衫金缕凤，纤手轻拈红豆弄，翠蛾双敛正含情。',
    'english': 'A willow-colored shawl embroidered with golden phoenixes, delicate hands lightly pluck red beans, brows furrowed in affection.'
}, {
    'chinese': '乍试夹衫金缕缝，山枕斜欹，枕损钗头凤。',
    'english': 'I tried on the lined jacket with its gold-embroidered seams, but the pillow I was using was askew, and the phoenix hairpin on the pillow was damaged.'
}, {
    'chinese': '玉珰缄札何由达，万里云罗一雁飞。',
    'english': 'How can the jade pendant and sealed letter reach us? A lone goose flies through ten thousand miles of clouds.'
}, {
    'chinese': '君在天一涯，妾身长别离。',
    'english': 'You are at the ends of the earth , and I am forever separated from you.'
}, {
    'chinese': '妾发初覆额，折花门前剧。',
    'english': 'My hair just covered my forehead, and I played with flowers in front of the gate.'
}, {
    'chinese': '乌啼隐杨花，君醉留妾家。',
    'english': "The crows' cries are hidden among the willow catkins ; you, drunk, linger at my house."
}, {
    'chinese': '士之耽兮，犹可说也。',
    'english': "The scholar's infatuation is something that can still be explained."
}, {
    'chinese': '有一美人兮，见之不忘。',
    'english': 'There was a beautiful woman, whom I could never forget once I saw her.'
}, {
    'chinese': '妇人依倚子与夫，同居贫贱心亦舒。',
    'english': 'A woman relies on her son and husband; even in poverty and hardship, she finds contentment in their shared life.'
}, {
    'chinese': '赵瑟初停凤凰柱，蜀琴欲奏鸳鸯弦。',
    'english': 'Zhao Se paused on the phoenix pillar, and Shu Qin was about to play the mandarin duck strings.'
}, {
    'chinese': '呼儿烹鲤鱼，中有尺素书。',
    'english': 'Call the boy to cook the carp; inside is a letter.'
}, {
    'chinese': '彼采葛兮，一日不见，如三月兮！',
    'english': 'She gathers kudzu; a day without seeing her feels like three months!'
}, {
    'chinese': '相思树，流年度，无端又被西风误。',
    'english': 'The acacia tree, through the passing years, is once again wronged by the west wind.'
}, {
    'chinese': '君怀良不开，贱妾当何依？',
    'english': 'If you, my lord, do not open your heart, where shall I, your lowly concubine, turn?'
}, {
    'chinese': '无那尘缘容易绝，燕子依然，软踏帘钩说。',
    'english': 'Alas, worldly ties are easily severed, yet the swallows remain, softly treading the curtain hooks as they speak.'
}, {
    'chinese': '愿为晨风鸟，双飞翔北林。',
    'english': 'I wish to be a bird in the morning breeze, flying together in the northern forest.'
}, {
    'chinese': '此水几时休，此恨何时已。',
    'english': 'When will this water cease flowing? When will this sorrow end?'
}, {
    'chinese': '秋雨，秋雨，一半因风吹去。',
    'english': 'Autumn rain, autumn rain, half of it is blown away by the wind.'
}, {
    'chinese': '终日不成章，泣涕零如雨。',
    'english': 'all day , and his tears fell like rain.'
}, {
    'chinese': '之子于归，宜其室家。',
    'english': 'When a daughter marries, may she bring harmony to her family.'
}, {
    'chinese': '青青子佩，悠悠我思。',
    'english': 'Green are your jade pendants, and my thoughts drift to you.'
}, {
    'chinese': '关关雎鸠，在河之洲。',
    'english': 'The ospreys cry, on the islet in the river.'
}, {
    'chinese': '悠悠生死别经年，魂魄不曾来入梦。',
    'english': 'we parted in life and death , yet my soul has never come to visit me in my dreams.'
}, {
    'chinese': '花开花落昔年同。',
    'english': 'Flowers bloom and fade, just like in those bygone years.'
}, {
    'chinese': '蒹葭采采，白露未已。',
    'english': 'The reeds are lush and green, the white dew has not yet ceased.'
}, {
    'chinese': '贾氏窥帘韩掾少，宓妃留枕魏王才。',
    'english': 'Lady Jia peeked through the curtain at Han Yuan, a young official; Lady Mi left her pillow for the King of Wei, a man of talent.'
}, {
    'chinese': '愿妾身为红菡萏。年年生在秋江上。',
    'english': 'I wish I were a red lotus, blooming year after year on the autumn river.'
}, {
    'chinese': '屏却相思，近来知道都无益。',
    'english': "I've tried to suppress my longing for you , but lately I've realized it's all in vain."
}, {
    'chinese': '今日江头两三树，可怜和叶度残春。',
    'english': 'Today, only two or three trees stand by the riverbank, pitifully spending the last days of spring with their leaves.'
}, {
    'chinese': '起来呵手封题处，偏到鸳鸯两字冰。',
    'english': 'I rose and warmed my hands at the seal of the inscription, only to find the words "Mandarin Ducks" frozen in the ice.'
}, {
    'chinese': '一枝折得，人间天上，没个人堪寄。',
    'english': "I've broken off a branch, but there's no one, neither in this world nor in heaven, to whom I can send it."
}, {
    'chinese': '摧烧之，当风扬其灰！',
    'english': 'Burn it, and let the wind scatter its ashes!'
}, {
    'chinese': '天旋地转回龙驭，到此踌躇不能去。',
    'english': 'The world spins and the dragon returns, but here it hesitates and cannot leave.'
}, {
    'chinese': '欢娱在今夕，嬿婉及良时。',
    'english': 'Joy fills this evening, a time of tender beauty and perfect timing.'
}, {
    'chinese': '如今俱是异乡人，相见更无因。',
    'english': 'Now we are all strangers in a foreign land, with no chance to meet again.'
}, {
    'chinese': '宁同万死碎绮翼，不忍云间两分张。',
    'english': "I'd rather die ten thousand deaths and have my beautiful wings shattered than bear to see us separated in the clouds."
}, {
    'chinese': '有女怀春，吉士诱之。',
    'english': 'A young woman was in love, and a handsome man seduced her.'
}, {
    'chinese': '欢乐趣，离别苦，就中更有痴儿女。',
    'english': 'Joy is pleasure, parting is pain, and among them are foolish lovers.'
}, {
    'chinese': '一场寂寞凭谁诉。算前言、总轻负。',
    'english': "To whom can I confide my loneliness? Looking back, I realize I've always taken things lightly."
}, {
    'chinese': '薄情转是多情累，曲曲柔肠碎。',
    'english': 'A heartless heart is burdened by a passionate one; a tender heart is broken.'
}, {
    'chinese': '曾是寂寥金烬暗，断无消息石榴红。',
    'english': 'Once, the golden embers were dim and desolate; now, there is no news of the red pomegranate.'
}, {
    'chinese': '此物何足贵，但感别经时。',
    'english': 'This thing is nothing special, but I am moved by the time we parted.'
}, {
    'chinese': '衡门之下，可以栖迟。',
    'english': 'Beneath the humble gate, one can find a place to rest and recuperate.'
}, {
    'chinese': '馨香盈怀袖，路远莫致之。',
    'english': 'The fragrance fills my sleeves, but the road is too far to reach it .'
}, {
    'chinese': '雨轻风色暴，梅子青时节。',
    'english': 'Light rain, fierce wind, the season when plums are green.'
}, {
    'chinese': '相思处、青年如梦，乘鸾仙阙。',
    'english': 'In the realm of longing, youth is like a dream, riding the phoenix to the celestial palace.'
}, {
    'chinese': '天上低昂似旧，人间儿女成狂。',
    'english': 'The heavens rise and fall as before, while the children on earth go mad.'
}, {
    'chinese': '长跪读素书，书中竟何如。',
    'english': 'He knelt down to read the plain book, wondering what it contained.'
}, {
    'chinese': '别日南鸿才北去，今朝北雁又南飞。',
    'english': 'The wild geese flew south yesterday, and today they fly south again.'
}, {
    'chinese': '溯洄从之，道阻且长。',
    'english': 'Going upstream to follow it, the road is difficult and long .'
}, {
    'chinese': '未见君子，忧心忡忡。',
    'english': 'I am filled with anxiety because I have not seen my beloved.'
}, {
    'chinese': '惆怅双鸳不到，幽阶一夜苔生。',
    'english': 'Sadly, the pair of mandarin ducks never arrive; overnight, moss grows on the secluded steps.'
}, {
    'chinese': '要见无因见，拚了终难拚。',
    'english': 'To see someone is impossible, and even if you try, it will be difficult in the end .'
}, {
    'chinese': '何以结恩情？美玉缀罗缨。',
    'english': 'How can we express our gratitude? With beautiful jade adorning a silk tassel .'
}, {
    'chinese': '忆共锦衾无半缝，郎似桐花，妾似桐花凤。',
    'english': 'I remember sharing a brocade quilt , not a single seam was left; you were like a paulownia flower , and I was like a phoenix among the paulownia flowers.'
}, {
    'chinese': '蒲生我池中，其叶何离离。',
    'english': 'Cattails grow in my pond, their leaves so lush and green .'
}, {
    'chinese': '今日何日兮，得与王子同舟。',
    'english': 'What a day this is, to be able to share a boat with the prince.'
}, {
    'chinese': '无论君不归，君归芳已歇。',
    'english': 'Whether you return or not, the fragrance of flowers will have faded by the time you do return.'
}, {
    'chinese': '溱与洧，方涣涣兮。',
    'english': 'The Zhen and Wei rivers are flowing freely .'
}, {
    'chinese': '沈家园里花如锦，半是当年识放翁。',
    'english': 'The flowers in Shenjia Garden are like brocade, half of them are familiar to Lu You from back then .'
}, {
    'chinese': '檀郎故相恼，须道花枝好。',
    'english': 'My lover is deliberately provoking me, but I must say the flowers are beautiful.'
}, {
    'chinese': '白日参辰现，北斗回南面。',
    'english': 'The sun shines brightly, and the Big Dipper turns south.'
}, {
    'chinese': '尘缘一点，回首西风又陈迹。',
    'english': 'A trace of worldly ties remains, and looking back, the west wind carries away the old memories.'
}, {
    'chinese': '女之耽兮，不可说也。',
    'english': "The woman's infatuation is beyond words."
}, {
    'chinese': '荏苒冬春谢，寒暑忽流易。',
    'english': 'Winter and spring pass swiftly, and the seasons change in an instant .'
}, {
    'chinese': '春林花多媚，春鸟意多哀。',
    'english': 'Spring forests are filled with beautiful flowers, but spring birds are often filled with sorrow.'
}, {
    'chinese': '但教心似金钿坚，天上人间会相见。',
    'english': 'But if our hearts are as firm as gold , we will meet again in heaven and on earth.'
}, {
    'chinese': '相去日已远，衣带日已缓。',
    'english': 'As the days go by, my clothes grow looser.'
}, {
    'chinese': '长恨去年今夜雨，洒离亭。',
    'english': 'I deeply regret the rain that fell on this night last year, sprinkling the pavilion at parting .'
}, {
    'chinese': '客从远方来，遗我一端绮。',
    'english': 'A guest came from afar, leaving me a piece of brocade .'
}, {
    'chinese': '黄蜂频扑秋千索，有当时、纤手香凝。',
    'english': 'Wasps frequently fluttered at the swing ropes, where once, delicate hands were fragrant .'
}, {
    'chinese': '千秋万古，为留待骚人，狂歌痛饮，来访雁丘处。',
    'english': 'For a thousand autumns and ten thousand ages, it awaits poets to come and visit the Goose Mound , singing wildly and drinking heartily .'
}, {
    'chinese': '摽有梅，其实七兮。',
    'english': 'The plum tree has fallen, and there are seven of them.'
}, {
    'chinese': '隔江人在雨声中，晚风菰叶生秋怨。',
    'english': 'Across the river, amidst the sound of rain, the evening breeze stirs up autumn melancholy in the reed leaves.'
}, {
    'chinese': '好梦惊回，望断高唐路。',
    'english': 'A sweet dream is abruptly ended, and I gaze longingly at the road to Gaotang.'
}, {
    'chinese': '可能无意传双蝶，尽付芳心与蜜房。',
    'english': 'Perhaps unintentionally, the butterflies carried the message, giving their hearts and souls to the honeycomb.'
}, {
    'chinese': '两情缠绵忽如故。复畏秋风生晓路。',
    'english': 'Our love, once so tender, has suddenly returned. Yet, I fear the autumn wind that blows across the dawn path.'
}, {
    'chinese': '绿兮衣兮，绿衣黄里。',
    'english': 'Green is her garment , green with a yellow lining.'
}, {
    'chinese': '问别来、解相思否。',
    'english': 'I ask you, since we parted, do you understand the pain of separation?'
}, {
    'chinese': '送君如昨日，檐前露已团。',
    'english': 'It feels like yesterday when I saw you off; the dew has already gathered on the eaves .'
}, {
    'chinese': '海水尚有涯，相思渺无畔。',
    'english': 'The sea has its limits, but longing has no bounds.'
}, {
    'chinese': '扇裁月魄羞难掩，车走雷声语未通。',
    'english': "The fan, cut from the moon's reflection, could not conceal her shyness; the carriage moved with the sound of thunder, and words could not be exchanged."
}, {
    'chinese': '君子于役，如之何勿思！',
    'english': 'My lord is away on official business; how can I not think of him!'
}, {
    'chinese': '缠绵思尽抽残茧，宛转心伤剥后蕉。',
    'english': 'Lingering thoughts , like unraveling a cocoon ; a heart wounded, like peeling a banana .'
}, {
    'chinese': '新知遭薄俗，旧好隔良缘。',
    'english': 'New acquaintances are met with vulgarity, and old friends are separated from good fortune.'
}, {
    'chinese': '汉之广矣，不可泳思',
    'english': 'The Han River is so vast that it cannot be swum across.'
}, {
    'chinese': '若容相访饮牛津，相对忘贫。',
    'english': 'If you would allow me to visit you in Oxford and drink with you, we would forget our poverty.'
}, {
    'chinese': '自牧归荑，洵美且异。',
    'english': 'The tender shoots that return from the pasture are truly beautiful and unique.'
}, {
    'chinese': '休即未能休，且待三更见日头。',
    'english': 'We cannot rest now ; we must wait until the sun rises at midnight .'
}, {
    'chinese': '唱罢秋坟愁未歇，春丛认取双栖蝶。',
    'english': 'The sorrow lingers even after the autumn graves are sung; in the spring thickets, I recognize the butterflies that mate in pairs.'
}, {
    'chinese': '十五始展眉，愿同尘与灰。',
    'english': 'At fifteen, I finally smiled and wished to be among the dust and ashes of the world.'
}, {
    'chinese': '男儿重意气，何用钱刀为！',
    'english': 'A man values honor and integrity; what use are money and weapons to him!'
}, {
    'chinese': '还怕两人俱薄命，再缘悭、剩月零风里。',
    'english': 'I fear that both of them are destined for misfortune, and that their fate will be sealed , leaving them alone in the cold wind and the moon.'
}, {
    'chinese': '闻道阊门萼绿华，昔年相望抵天涯。',
    'english': "I've heard of E Lü Hua at Changmen Gate ; in the past, we longed to see each other from afar, though we were worlds apart."
}, {
    'chinese': '徘徊庭树下，自挂东南枝。',
    'english': 'Lingering beneath the courtyard trees, I hang myself from the southeast branch.'
}, {
    'chinese': '心灰尽、有发未全僧。',
    'english': 'Heartbroken and disillusioned, yet still a monk with hair.'
}, {
    'chinese': '秋霜欲下手先知，灯底裁缝剪刀冷。',
    'english': "Autumn frost knows before it strikes, and the tailor's scissors are cold under the lamp ."
}, {
    'chinese': '机中锦字论长恨，楼上花枝笑独眠。',
    'english': 'the loom express enduring sorrow , while the flowering branches upstairs laugh at my solitary sleep.'
}, {
    'chinese': '我命绝今日，魂去尸长留！',
    'english': 'My life ends today, my soul departs but my body remains!'
}, {
    'chinese': '顾我无衣搜荩箧，泥他沽酒拔金钗。',
    'english': 'I searched my meager belongings for clothes, and offered my gold hairpin to him to buy wine.'
}, {
    'chinese': '合昏尚知时，鸳鸯不独宿。',
    'english': 'Even the mimosa knows when to sleep, and the mandarin ducks do not sleep alone.'
}, {
    'chinese': '惜分长怕君先去，直待醉时休。',
    'english': "I cherish this moment, fearing you'll leave first; I'll wait until we're drunk to rest."
}, {
    'chinese': '枕障薰炉隔绣帷，二年终日苦相思，杏花明月始应知。',
    'english': 'A pillow, a censer, and an embroidered curtain separate me from my longing ; for two years I have suffered the torment of unrequited love day and night; only now, with the apricot blossoms and the bright moon, can I know my sorrow .'
}, {
    'chinese': '将缣来比素，新人不如故。',
    'english': 'Comparing silk to plain white, new people are not as good as old ones.'
}, {
    'chinese': '竹竿何袅袅，鱼尾何簁簁！',
    'english': 'How gracefully the bamboo poles sway, how gently the fish tails ripple !'
}, {
    'chinese': '挑兮达兮，在城阙兮。',
    'english': 'I wander and reach for the city gates.'
}, {
    'chinese': '何期小会幽欢，变作离情别绪。',
    'english': 'Who would have thought that our brief, joyful meeting would turn into such sorrowful parting?'
}, {
    'chinese': '维士与女，伊其相谑，赠之以勺药。',
    'english': 'The man and woman were joking with each other , and he gave her a peony.'
}, {
    'chinese': '镇相随、莫抛躲，针线闲拈伴伊坐。',
    'english': "Stay close to her, don't abandon her ; idly pick up needle and thread and sit with her."
}, {
    'chinese': '还作一段相思，冷波叶舞愁红，送人双桨。',
    'english': 'I still write a tale of longing, as the cold waves and red leaves dance in sorrow , sending off others with double oars.'
}, {
    'chinese': '画船捶鼓催君去，高楼把酒留君住。',
    'english': 'The painted boat and the beating drums urge you to leave ; the tall building offers wine to keep you here.'
}, {
    'chinese': '三春已暮花从风，空留可怜与谁同。',
    'english': 'Spring is almost over, the flowers have fallen in the wind, leaving only pitiful sights for whom to share them?'
}, {
    'chinese': '泪咽却无声，只向从前悔薄情。',
    'english': 'Tears welled up but remained silent; she could only regret her past heartlessness.'
}, {
    'chinese': '东飞乌鹊西飞燕。盈盈一水经年见。',
    'english': 'Magpies fly east, swallows fly west . A single stream flows between us, visible year after year.'
}, {
    'chinese': '恐是仙家好别离，故教迢递作佳期。',
    'english': 'Perhaps the immortals cherish parting, thus they ordained this distant meeting as auspicious occasions.'
}, {
    'chinese': '吹箫人去玉楼空，肠断与谁同倚。',
    'english': 'The flute player is gone, the jade tower is empty; with whom can I share this heartbreak?'
}, {
    'chinese': '宝奁明月不欺人，明日归来君试看。',
    'english': 'The moon shines brightly on the treasure box , it does not deceive people; come back tomorrow and see for yourself.'
}, {
    'chinese': '意长翻恨游丝短。尽日相思罗带缓。',
    'english': 'My longing is like a fleeting thread of silk, yet my sorrow is short. All day long, my longing makes my silken sash slacken.'
}, {
    'chinese': '旧相思、偏供闲昼。',
    'english': 'Old lovesickness, only to be enjoyed during idle days .'
}, {
    'chinese': '自与东君作别，刬地无聊。',
    'english': "Since parting ways with the Lord of Spring, I've been utterly bored."
}, {
    'chinese': '何事非相思，江上葳蕤竹。',
    'english': 'What is not longing? The lush bamboo by the river.'
}, {
    'chinese': '甚时跃马归来，认得迎门轻笑。',
    'english': 'When will I return on horseback, and recognize you with a gentle smile at the door?'
}, {
    'chinese': '愿君采葑菲，无以下体妨。',
    'english': 'I wish you would gather turnips and radishes, without any hindrance to your lower body.'
}, {
    'chinese': '美人结长想，对此心凄然。',
    'english': 'I think of the beautiful woman and feel a deep sadness in my heart.'
}, {
    'chinese': '双星良夜，耕慵织懒，应被群仙相妒。',
    'english': 'On this auspicious night of twin stars, I am too lazy to work the fields or weave , a sight that would surely make even the immortals envious.'
}];
