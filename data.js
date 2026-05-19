// 英语学习App - 核心数据
// 270个高频儿童英语单词，按45天分组，每天6个
// 包含英文、中文、emoji、音标(phonetic)

const WORDS_DATA = [
  // === 第1天：家庭成员 ===
  { day: 1, words: [
    { en: "mom", cn: "妈妈", emoji: "👩", ph: "/mɒm/" },
    { en: "dad", cn: "爸爸", emoji: "👨", ph: "/dæd/" },
    { en: "brother", cn: "兄弟", emoji: "👦", ph: "/ˈbrʌðər/" },
    { en: "sister", cn: "姐妹", emoji: "👧", ph: "/ˈsɪstər/" },
    { en: "family", cn: "家庭", emoji: "👨‍👩‍👧‍👦", ph: "/ˈfæməli/" },
    { en: "grandma", cn: "奶奶/外婆", emoji: "👵", ph: "/ˈɡrænmɑː/" }
  ]},
  // === 第2天：身体部位 ===
  { day: 2, words: [
    { en: "head", cn: "头", emoji: "🧠", ph: "/hed/" },
    { en: "hand", cn: "手", emoji: "🤚", ph: "/hænd/" },
    { en: "eye", cn: "眼睛", emoji: "👁️", ph: "/aɪ/" },
    { en: "foot", cn: "脚", emoji: "🦶", ph: "/fʊt/" },
    { en: "mouth", cn: "嘴巴", emoji: "👄", ph: "/maʊθ/" },
    { en: "nose", cn: "鼻子", emoji: "👃", ph: "/noʊz/" }
  ]},
  // === 第3天：动物1 ===
  { day: 3, words: [
    { en: "cat", cn: "猫", emoji: "🐱", ph: "/kæt/" },
    { en: "dog", cn: "狗", emoji: "🐶", ph: "/dɒɡ/" },
    { en: "bird", cn: "鸟", emoji: "🐦", ph: "/bɜːrd/" },
    { en: "fish", cn: "鱼", emoji: "🐟", ph: "/fɪʃ/" },
    { en: "duck", cn: "鸭子", emoji: "🦆", ph: "/dʌk/" },
    { en: "mouse", cn: "老鼠", emoji: "🐭", ph: "/maʊs/" }
  ]},
  // === 第4天：颜色 ===
  { day: 4, words: [
    { en: "red", cn: "红色", emoji: "🔴", ph: "/red/" },
    { en: "blue", cn: "蓝色", emoji: "🔵", ph: "/bluː/" },
    { en: "green", cn: "绿色", emoji: "🟢", ph: "/ɡriːn/" },
    { en: "yellow", cn: "黄色", emoji: "🟡", ph: "/ˈjeloʊ/" },
    { en: "white", cn: "白色", emoji: "⚪", ph: "/waɪt/" },
    { en: "black", cn: "黑色", emoji: "⚫", ph: "/blæk/" }
  ]},
  // === 第5天：食物1 ===
  { day: 5, words: [
    { en: "apple", cn: "苹果", emoji: "🍎", ph: "/ˈæpəl/" },
    { en: "banana", cn: "香蕉", emoji: "🍌", ph: "/bəˈnænə/" },
    { en: "milk", cn: "牛奶", emoji: "🥛", ph: "/mɪlk/" },
    { en: "cake", cn: "蛋糕", emoji: "🎂", ph: "/keɪk/" },
    { en: "egg", cn: "鸡蛋", emoji: "🥚", ph: "/eɡ/" },
    { en: "bread", cn: "面包", emoji: "🍞", ph: "/bred/" }
  ]},
  // === 第6天：数字1 ===
  { day: 6, words: [
    { en: "one", cn: "一", emoji: "1️⃣", ph: "/wʌn/" },
    { en: "two", cn: "二", emoji: "2️⃣", ph: "/tuː/" },
    { en: "three", cn: "三", emoji: "3️⃣", ph: "/θriː/" },
    { en: "four", cn: "四", emoji: "4️⃣", ph: "/fɔːr/" },
    { en: "five", cn: "五", emoji: "5️⃣", ph: "/faɪv/" },
    { en: "six", cn: "六", emoji: "6️⃣", ph: "/sɪks/" }
  ]},
  // === 第7天：自然1 ===
  { day: 7, words: [
    { en: "sun", cn: "太阳", emoji: "☀️", ph: "/sʌn/" },
    { en: "moon", cn: "月亮", emoji: "🌙", ph: "/muːn/" },
    { en: "star", cn: "星星", emoji: "⭐", ph: "/stɑːr/" },
    { en: "tree", cn: "树", emoji: "🌳", ph: "/triː/" },
    { en: "flower", cn: "花", emoji: "🌸", ph: "/ˈflaʊər/" },
    { en: "grass", cn: "草", emoji: "🌿", ph: "/ɡræs/" }
  ]},
  // === 第8天：日常动作 ===
  { day: 8, words: [
    { en: "eat", cn: "吃", emoji: "🍽️", ph: "/iːt/" },
    { en: "drink", cn: "喝", emoji: "🥤", ph: "/drɪŋk/" },
    { en: "sleep", cn: "睡觉", emoji: "😴", ph: "/sliːp/" },
    { en: "walk", cn: "走路", emoji: "🚶", ph: "/wɔːk/" },
    { en: "run", cn: "跑", emoji: "🏃", ph: "/rʌn/" },
    { en: "sit", cn: "坐", emoji: "🪑", ph: "/sɪt/" }
  ]},
  // === 第9天：学校物品 ===
  { day: 9, words: [
    { en: "book", cn: "书", emoji: "📖", ph: "/bʊk/" },
    { en: "pen", cn: "笔", emoji: "🖊️", ph: "/pen/" },
    { en: "bag", cn: "书包", emoji: "🎒", ph: "/bæɡ/" },
    { en: "school", cn: "学校", emoji: "🏫", ph: "/skuːl/" },
    { en: "teacher", cn: "老师", emoji: "👨‍🏫", ph: "/ˈtiːtʃər/" },
    { en: "desk", cn: "课桌", emoji: "🪑", ph: "/desk/" }
  ]},
  // === 第10天：动物2 ===
  { day: 10, words: [
    { en: "rabbit", cn: "兔子", emoji: "🐰", ph: "/ˈræbɪt/" },
    { en: "pig", cn: "猪", emoji: "🐷", ph: "/pɪɡ/" },
    { en: "cow", cn: "牛", emoji: "🐮", ph: "/kaʊ/" },
    { en: "horse", cn: "马", emoji: "🐴", ph: "/hɔːrs/" },
    { en: "chicken", cn: "鸡", emoji: "🐔", ph: "/ˈtʃɪkɪn/" },
    { en: "sheep", cn: "绵羊", emoji: "🐑", ph: "/ʃiːp/" }
  ]},
  // === 第11天：衣物 ===
  { day: 11, words: [
    { en: "shirt", cn: "衬衫", emoji: "👕", ph: "/ʃɜːrt/" },
    { en: "dress", cn: "裙子", emoji: "👗", ph: "/dres/" },
    { en: "hat", cn: "帽子", emoji: "🎩", ph: "/hæt/" },
    { en: "shoe", cn: "鞋子", emoji: "👟", ph: "/ʃuː/" },
    { en: "coat", cn: "外套", emoji: "🧥", ph: "/koʊt/" },
    { en: "sock", cn: "袜子", emoji: "🧦", ph: "/sɒk/" }
  ]},
  // === 第12天：水果 ===
  { day: 12, words: [
    { en: "orange", cn: "橙子", emoji: "🍊", ph: "/ˈɔːrɪndʒ/" },
    { en: "grape", cn: "葡萄", emoji: "🍇", ph: "/ɡreɪp/" },
    { en: "watermelon", cn: "西瓜", emoji: "🍉", ph: "/ˈwɔːrtərmelən/" },
    { en: "pear", cn: "梨", emoji: "🍐", ph: "/per/" },
    { en: "strawberry", cn: "草莓", emoji: "🍓", ph: "/ˈstrɔːberi/" },
    { en: "peach", cn: "桃子", emoji: "🍑", ph: "/piːtʃ/" }
  ]},
  // === 第13天：天气 ===
  { day: 13, words: [
    { en: "rain", cn: "雨", emoji: "🌧️", ph: "/reɪn/" },
    { en: "snow", cn: "雪", emoji: "❄️", ph: "/snoʊ/" },
    { en: "wind", cn: "风", emoji: "💨", ph: "/wɪnd/" },
    { en: "cloud", cn: "云", emoji: "☁️", ph: "/klaʊd/" },
    { en: "hot", cn: "热", emoji: "🔥", ph: "/hɒt/" },
    { en: "cold", cn: "冷", emoji: "🧊", ph: "/koʊld/" }
  ]},
  // === 第14天：情感 ===
  { day: 14, words: [
    { en: "happy", cn: "开心", emoji: "😊", ph: "/ˈhæpi/" },
    { en: "sad", cn: "伤心", emoji: "😢", ph: "/sæd/" },
    { en: "angry", cn: "生气", emoji: "😠", ph: "/ˈæŋɡri/" },
    { en: "scared", cn: "害怕", emoji: "😨", ph: "/skerd/" },
    { en: "love", cn: "爱", emoji: "❤️", ph: "/lʌv/" },
    { en: "tired", cn: "累", emoji: "😴", ph: "/ˈtaɪərd/" }
  ]},
  // === 第15天：交通工具 ===
  { day: 15, words: [
    { en: "car", cn: "汽车", emoji: "🚗", ph: "/kɑːr/" },
    { en: "bus", cn: "公交车", emoji: "🚌", ph: "/bʌs/" },
    { en: "train", cn: "火车", emoji: "🚂", ph: "/treɪn/" },
    { en: "boat", cn: "船", emoji: "🚢", ph: "/boʊt/" },
    { en: "plane", cn: "飞机", emoji: "✈️", ph: "/pleɪn/" },
    { en: "bike", cn: "自行车", emoji: "🚲", ph: "/baɪk/" }
  ]},
  // === 第16天：地点 ===
  { day: 16, words: [
    { en: "home", cn: "家", emoji: "🏠", ph: "/hoʊm/" },
    { en: "park", cn: "公园", emoji: "🏞️", ph: "/pɑːrk/" },
    { en: "shop", cn: "商店", emoji: "🛒", ph: "/ʃɒp/" },
    { en: "hospital", cn: "医院", emoji: "🏥", ph: "/ˈhɒspɪtəl/" },
    { en: "library", cn: "图书馆", emoji: "📚", ph: "/ˈlaɪbreri/" },
    { en: "zoo", cn: "动物园", emoji: "🦁", ph: "/zuː/" }
  ]},
  // === 第17天：食物2 ===
  { day: 17, words: [
    { en: "rice", cn: "米饭", emoji: "🍚", ph: "/raɪs/" },
    { en: "bread", cn: "面包", emoji: "🍞", ph: "/bred/" },
    { en: "soup", cn: "汤", emoji: "🥣", ph: "/suːp/" },
    { en: "candy", cn: "糖果", emoji: "🍬", ph: "/ˈkændi/" },
    { en: "ice cream", cn: "冰淇淋", emoji: "🍦", ph: "/aɪs kriːm/" },
    { en: "cookie", cn: "饼干", emoji: "🍪", ph: "/ˈkʊki/" }
  ]},
  // === 第18天：动作2 ===
  { day: 18, words: [
    { en: "play", cn: "玩", emoji: "🤸", ph: "/pleɪ/" },
    { en: "jump", cn: "跳", emoji: "🦘", ph: "/dʒʌmp/" },
    { en: "sing", cn: "唱歌", emoji: "🎤", ph: "/sɪŋ/" },
    { en: "dance", cn: "跳舞", emoji: "💃", ph: "/dæns/" },
    { en: "swim", cn: "游泳", emoji: "🏊", ph: "/swɪm/" },
    { en: "read", cn: "阅读", emoji: "📖", ph: "/riːd/" }
  ]},
  // === 第19天：描述词 ===
  { day: 19, words: [
    { en: "big", cn: "大", emoji: "🦕", ph: "/bɪɡ/" },
    { en: "small", cn: "小", emoji: "🐜", ph: "/smɔːl/" },
    { en: "fast", cn: "快", emoji: "⚡", ph: "/fæst/" },
    { en: "slow", cn: "慢", emoji: "🐢", ph: "/sloʊ/" },
    { en: "new", cn: "新的", emoji: "✨", ph: "/nuː/" },
    { en: "old", cn: "旧的", emoji: "🏛️", ph: "/oʊld/" }
  ]},
  // === 第20天：家具 ===
  { day: 20, words: [
    { en: "table", cn: "桌子", emoji: "🪑", ph: "/ˈteɪbəl/" },
    { en: "chair", cn: "椅子", emoji: "💺", ph: "/tʃer/" },
    { en: "bed", cn: "床", emoji: "🛏️", ph: "/bed/" },
    { en: "door", cn: "门", emoji: "🚪", ph: "/dɔːr/" },
    { en: "window", cn: "窗户", emoji: "🪟", ph: "/ˈwɪndoʊ/" },
    { en: "lamp", cn: "灯", emoji: "💡", ph: "/læmp/" }
  ]},
  // === 第21天：水相关 ===
  { day: 21, words: [
    { en: "water", cn: "水", emoji: "💧", ph: "/ˈwɔːtər/" },
    { en: "river", cn: "河", emoji: "🏞️", ph: "/ˈrɪvər/" },
    { en: "sea", cn: "海", emoji: "🌊", ph: "/siː/" },
    { en: "lake", cn: "湖", emoji: "🏖️", ph: "/leɪk/" },
    { en: "rainbow", cn: "彩虹", emoji: "🌈", ph: "/ˈreɪnboʊ/" },
    { en: "beach", cn: "海滩", emoji: "🏖️", ph: "/biːtʃ/" }
  ]},
  // === 第22天：玩具 ===
  { day: 22, words: [
    { en: "ball", cn: "球", emoji: "⚽", ph: "/bɔːl/" },
    { en: "toy", cn: "玩具", emoji: "🧸", ph: "/tɔɪ/" },
    { en: "game", cn: "游戏", emoji: "🎮", ph: "/ɡeɪm/" },
    { en: "doll", cn: "洋娃娃", emoji: "🪆", ph: "/dɒl/" },
    { en: "kite", cn: "风筝", emoji: "🪁", ph: "/kaɪt/" },
    { en: "puzzle", cn: "拼图", emoji: "🧩", ph: "/ˈpʌzəl/" }
  ]},
  // === 第23天：时间 ===
  { day: 23, words: [
    { en: "morning", cn: "早上", emoji: "🌅", ph: "/ˈmɔːrnɪŋ/" },
    { en: "night", cn: "晚上", emoji: "🌃", ph: "/naɪt/" },
    { en: "today", cn: "今天", emoji: "📅", ph: "/təˈdeɪ/" },
    { en: "tomorrow", cn: "明天", emoji: "🔜", ph: "/təˈmɔːroʊ/" },
    { en: "yesterday", cn: "昨天", emoji: "🔙", ph: "/ˈjestərdeɪ/" },
    { en: "week", cn: "周", emoji: "📅", ph: "/wiːk/" }
  ]},
  // === 第24天：季节 ===
  { day: 24, words: [
    { en: "spring", cn: "春天", emoji: "🌱", ph: "/sprɪŋ/" },
    { en: "summer", cn: "夏天", emoji: "☀️", ph: "/ˈsʌmər/" },
    { en: "autumn", cn: "秋天", emoji: "🍂", ph: "/ˈɔːtəm/" },
    { en: "winter", cn: "冬天", emoji: "⛄", ph: "/ˈwɪntər/" },
    { en: "season", cn: "季节", emoji: "🔄", ph: "/ˈsiːzən/" },
    { en: "weather", cn: "天气", emoji: "🌤️", ph: "/ˈweðər/" }
  ]},
  // === 第25天：更多动物 ===
  { day: 25, words: [
    { en: "bear", cn: "熊", emoji: "🐻", ph: "/ber/" },
    { en: "lion", cn: "狮子", emoji: "🦁", ph: "/ˈlaɪən/" },
    { en: "tiger", cn: "老虎", emoji: "🐯", ph: "/ˈtaɪɡər/" },
    { en: "monkey", cn: "猴子", emoji: "🐒", ph: "/ˈmʌŋki/" },
    { en: "elephant", cn: "大象", emoji: "🐘", ph: "/ˈelɪfənt/" },
    { en: "panda", cn: "熊猫", emoji: "🐼", ph: "/ˈpændə/" }
  ]},
  // === 第26天：职业 ===
  { day: 26, words: [
    { en: "doctor", cn: "医生", emoji: "👨‍⚕️", ph: "/ˈdɒktər/" },
    { en: "nurse", cn: "护士", emoji: "👩‍⚕️", ph: "/nɜːrs/" },
    { en: "cook", cn: "厨师", emoji: "👨‍🍳", ph: "/kʊk/" },
    { en: "farmer", cn: "农民", emoji: "👨‍🌾", ph: "/ˈfɑːrmər/" },
    { en: "police", cn: "警察", emoji: "👮", ph: "/pəˈliːs/" },
    { en: "driver", cn: "司机", emoji: "🚗", ph: "/ˈdraɪvər/" }
  ]},
  // === 第27天：动作3 ===
  { day: 27, words: [
    { en: "read", cn: "阅读", emoji: "📖", ph: "/riːd/" },
    { en: "write", cn: "写", emoji: "✍️", ph: "/raɪt/" },
    { en: "draw", cn: "画画", emoji: "🎨", ph: "/drɔː/" },
    { en: "fly", cn: "飞", emoji: "🦅", ph: "/flaɪ/" },
    { en: "climb", cn: "爬", emoji: "🧗", ph: "/klaɪm/" },
    { en: "cook", cn: "做饭", emoji: "👨‍🍳", ph: "/kʊk/" }
  ]},
  // === 第28天：形状 ===
  { day: 28, words: [
    { en: "circle", cn: "圆形", emoji: "⭕", ph: "/ˈsɜːrkəl/" },
    { en: "square", cn: "方形", emoji: "⬛", ph: "/skwer/" },
    { en: "line", cn: "线", emoji: "➖", ph: "/laɪn/" },
    { en: "round", cn: "圆的", emoji: "🔄", ph: "/raʊnd/" },
    { en: "shape", cn: "形状", emoji: "🔷", ph: "/ʃeɪp/" },
    { en: "triangle", cn: "三角形", emoji: "🔺", ph: "/ˈtraɪæŋɡəl/" }
  ]},
  // === 第29天：味道与感觉 ===
  { day: 29, words: [
    { en: "sweet", cn: "甜", emoji: "🍭", ph: "/swiːt/" },
    { en: "cold", cn: "冷", emoji: "🧊", ph: "/koʊld/" },
    { en: "warm", cn: "温暖", emoji: "🧣", ph: "/wɔːrm/" },
    { en: "clean", cn: "干净", emoji: "🧹", ph: "/kliːn/" },
    { en: "dirty", cn: "脏", emoji: "🤮", ph: "/ˈdɜːrti/" },
    { en: "soft", cn: "柔软", emoji: "🧸", ph: "/sɔːft/" }
  ]},
  // === 第30天：常用副词/介词 ===
  { day: 30, words: [
    { en: "up", cn: "上", emoji: "⬆️", ph: "/ʌp/" },
    { en: "down", cn: "下", emoji: "⬇️", ph: "/daʊn/" },
    { en: "in", cn: "里面", emoji: "📥", ph: "/ɪn/" },
    { en: "out", cn: "外面", emoji: "📤", ph: "/aʊt/" },
    { en: "here", cn: "这里", emoji: "📍", ph: "/hɪr/" },
    { en: "there", cn: "那里", emoji: "🗺️", ph: "/ðer/" }
  ]},
  // === 第31天：常用副词/介词2 ===
  { day: 31, words: [
    { en: "near", cn: "近", emoji: "📏", ph: "/nɪr/" },
    { en: "far", cn: "远", emoji: "🛤️", ph: "/fɑːr/" },
    { en: "again", cn: "又/再", emoji: "🔁", ph: "/əˈɡen/" },
    { en: "very", cn: "非常", emoji: "💯", ph: "/ˈveri/" },
    { en: "always", cn: "总是", emoji: "⏰", ph: "/ˈɔːlweɪz/" },
    { en: "never", cn: "从不", emoji: "🚫", ph: "/ˈnevər/" }
  ]},
  // === 第32天：人物称呼 ===
  { day: 32, words: [
    { en: "boy", cn: "男孩", emoji: "👦", ph: "/bɔɪ/" },
    { en: "girl", cn: "女孩", emoji: "👧", ph: "/ɡɜːrl/" },
    { en: "baby", cn: "宝宝", emoji: "👶", ph: "/ˈbeɪbi/" },
    { en: "friend", cn: "朋友", emoji: "🤝", ph: "/frend/" },
    { en: "name", cn: "名字", emoji: "📛", ph: "/neɪm/" },
    { en: "baby", cn: "小孩", emoji: "🧒", ph: "/ˈtʃaɪld/" }
  ]},
  // === 第33天：家居物品 ===
  { day: 33, words: [
    { en: "cup", cn: "杯子", emoji: "🥤", ph: "/kʌp/" },
    { en: "plate", cn: "盘子", emoji: "🍽️", ph: "/pleɪt/" },
    { en: "box", cn: "盒子", emoji: "📦", ph: "/bɒks/" },
    { en: "key", cn: "钥匙", emoji: "🔑", ph: "/kiː/" },
    { en: "light", cn: "灯/光", emoji: "💡", ph: "/laɪt/" },
    { en: "clock", cn: "钟", emoji: "🕐", ph: "/klɒk/" }
  ]},
  // === 第34天：描述词2 ===
  { day: 34, words: [
    { en: "long", cn: "长", emoji: "📏", ph: "/lɔːŋ/" },
    { en: "short", cn: "短", emoji: "📐", ph: "/ʃɔːrt/" },
    { en: "tall", cn: "高", emoji: "🗼", ph: "/tɔːl/" },
    { en: "good", cn: "好的", emoji: "👍", ph: "/ɡʊd/" },
    { en: "bad", cn: "坏的", emoji: "👎", ph: "/bæd/" },
    { en: "nice", cn: "美好的", emoji: "✨", ph: "/naɪs/" }
  ]},
  // === 第35天：食物3 ===
  { day: 35, words: [
    { en: "pizza", cn: "披萨", emoji: "🍕", ph: "/ˈpiːtsə/" },
    { en: "burger", cn: "汉堡", emoji: "🍔", ph: "/ˈbɜːrɡər/" },
    { en: "juice", cn: "果汁", emoji: "🧃", ph: "/dʒuːs/" },
    { en: "chocolate", cn: "巧克力", emoji: "🍫", ph: "/ˈtʃɒklət/" },
    { en: "noodle", cn: "面条", emoji: "🍜", ph: "/ˈnuːdəl/" },
    { en: "rice", cn: "米饭", emoji: "🍚", ph: "/raɪs/" }
  ]},
  // === 第36天：自然2 ===
  { day: 36, words: [
    { en: "hill", cn: "小山", emoji: "⛰️", ph: "/hɪl/" },
    { en: "mountain", cn: "大山", emoji: "🏔️", ph: "/ˈmaʊntən/" },
    { en: "grass", cn: "草", emoji: "🌿", ph: "/ɡræs/" },
    { en: "leaf", cn: "叶子", emoji: "🍃", ph: "/liːf/" },
    { en: "rock", cn: "石头", emoji: "🪨", ph: "/rɒk/" },
    { en: "sand", cn: "沙子", emoji: "🏖️", ph: "/sænd/" }
  ]},
  // === 第37天：日常物品 ===
  { day: 37, words: [
    { en: "phone", cn: "电话", emoji: "📱", ph: "/foʊn/" },
    { en: "clock", cn: "钟", emoji: "🕐", ph: "/klɒk/" },
    { en: "mirror", cn: "镜子", emoji: "🪞", ph: "/ˈmɪrər/" },
    { en: "paper", cn: "纸", emoji: "📄", ph: "/ˈpeɪpər/" },
    { en: "picture", cn: "图片", emoji: "🖼️", ph: "/ˈpɪktʃər/" },
    { en: "radio", cn: "收音机", emoji: "📻", ph: "/ˈreɪdioʊ/" }
  ]},
  // === 第38天：社交用语 ===
  { day: 38, words: [
    { en: "hello", cn: "你好", emoji: "👋", ph: "/həˈloʊ/" },
    { en: "thank", cn: "谢谢", emoji: "🙏", ph: "/θæŋk/" },
    { en: "please", cn: "请", emoji: "🙏", ph: "/pliːz/" },
    { en: "sorry", cn: "对不起", emoji: "😔", ph: "/ˈsɔːri/" },
    { en: "bye", cn: "再见", emoji: "👋", ph: "/baɪ/" },
    { en: "sorry", cn: "抱歉", emoji: "😞", ph: "/ˈsɑːri/" }
  ]},
  // === 第39天：数字2 ===
  { day: 39, words: [
    { en: "seven", cn: "七", emoji: "7️⃣", ph: "/ˈsevən/" },
    { en: "eight", cn: "八", emoji: "8️⃣", ph: "/eɪt/" },
    { en: "nine", cn: "九", emoji: "9️⃣", ph: "/naɪn/" },
    { en: "ten", cn: "十", emoji: "🔟", ph: "/ten/" },
    { en: "hundred", cn: "百", emoji: "💯", ph: "/ˈhʌndrəd/" },
    { en: "zero", cn: "零", emoji: "0️⃣", ph: "/ˈzɪroʊ/" }
  ]},
  // === 第40天：昆虫与小动物 ===
  { day: 40, words: [
    { en: "bee", cn: "蜜蜂", emoji: "🐝", ph: "/biː/" },
    { en: "ant", cn: "蚂蚁", emoji: "🐜", ph: "/ænt/" },
    { en: "frog", cn: "青蛙", emoji: "🐸", ph: "/frɒɡ/" },
    { en: "snail", cn: "蜗牛", emoji: "🐌", ph: "/sneɪl/" },
    { en: "butterfly", cn: "蝴蝶", emoji: "🦋", ph: "/ˈbʌtərflaɪ/" },
    { en: "spider", cn: "蜘蛛", emoji: "🕷️", ph: "/ˈspaɪdər/" }
  ]},
  // === 第41天：空间方位 ===
  { day: 41, words: [
    { en: "left", cn: "左", emoji: "⬅️", ph: "/left/" },
    { en: "right", cn: "右", emoji: "➡️", ph: "/raɪt/" },
    { en: "top", cn: "顶部", emoji: "⤴️", ph: "/tɒp/" },
    { en: "bottom", cn: "底部", emoji: "⤵️", ph: "/ˈbɒtəm/" },
    { en: "middle", cn: "中间", emoji: "↔️", ph: "/ˈmɪdəl/" },
    { en: "front", cn: "前面", emoji: "👆", ph: "/frʌnt/" }
  ]},
  // === 第42天：杂项常用 ===
  { day: 42, words: [
    { en: "color", cn: "颜色", emoji: "🎨", ph: "/ˈkʌlər/" },
    { en: "story", cn: "故事", emoji: "📚", ph: "/ˈstɔːri/" },
    { en: "song", cn: "歌曲", emoji: "🎵", ph: "/sɔːŋ/" },
    { en: "birthday", cn: "生日", emoji: "🎂", ph: "/ˈbɜːrθdeɪ/" },
    { en: "party", cn: "派对", emoji: "🎉", ph: "/ˈpɑːrti/" },
    { en: "gift", cn: "礼物", emoji: "🎁", ph: "/ɡɪft/" }
  ]},
  // === 第43天：更多描述 ===
  { day: 43, words: [
    { en: "beautiful", cn: "美丽的", emoji: "🌺", ph: "/ˈbjuːtɪfəl/" },
    { en: "funny", cn: "好笑的", emoji: "🤣", ph: "/ˈfʌni/" },
    { en: "strong", cn: "强壮的", emoji: "💪", ph: "/strɔːŋ/" },
    { en: "quiet", cn: "安静的", emoji: "🤫", ph: "/ˈkwaɪət/" },
    { en: "kind", cn: "善良的", emoji: "🥰", ph: "/kaɪnd/" },
    { en: "smart", cn: "聪明的", emoji: "🧠", ph: "/smɑːrt/" }
  ]},
  // === 第44天：常见动词 ===
  { day: 44, words: [
    { en: "want", cn: "想要", emoji: "🙋", ph: "/wɒnt/" },
    { en: "like", cn: "喜欢", emoji: "👍", ph: "/laɪk/" },
    { en: "help", cn: "帮助", emoji: "🆘", ph: "/help/" },
    { en: "look", cn: "看", emoji: "👀", ph: "/lʊk/" },
    { en: "listen", cn: "听", emoji: "👂", ph: "/ˈlɪsən/" },
    { en: "need", cn: "需要", emoji: "❓", ph: "/niːd/" }
  ]},
  // === 第45天：总结与日常 ===
  { day: 45, words: [
    { en: "open", cn: "打开", emoji: "📂", ph: "/ˈoʊpən/" },
    { en: "close", cn: "关闭", emoji: "📁", ph: "/kloʊz/" },
    { en: "stop", cn: "停止", emoji: "🛑", ph: "/stɒp/" },
    { en: "go", cn: "去", emoji: "🏃‍♂️", ph: "/ɡoʊ/" },
    { en: "come", cn: "来", emoji: "🫳", ph: "/kʌm/" },
    { en: "finish", cn: "完成", emoji: "✅", ph: "/ˈfɪnɪʃ/" }
  ]}
];

// 绘本故事数据 - 每天6个单词，6页故事
const STORY_DATA = [
  {
    day: 1,
    title: "我的家人",
    titleEn: "My Family",
    pages: [
      { en: "This is my ( ), she is gentle.", cn: "这是我的（妈妈），她很温柔。", illustration: "👩 温柔的妈妈", word: "mom" },
      { en: "This is my ( ), he is strong.", cn: "这是我的（爸爸），他很强壮。", illustration: "👨 强壮的爸爸", word: "dad" },
      { en: "My ( ) likes to play football.", cn: "我的（兄弟）喜欢踢球。", illustration: "👦 哥哥在踢球", word: "brother" },
      { en: "My ( ) likes to sing.", cn: "我的（姐妹）喜欢唱歌。", illustration: "👧 姐姐在唱歌", word: "sister" },
      { en: "We are a happy ( )!", cn: "我们是一个快乐的（家庭）！", illustration: "👨‍👩‍👧‍👦 全家福", word: "family" },
      { en: "( ) makes delicious food for me!", cn: "（奶奶/外婆）给我做好吃的！", illustration: "👵 奶奶在厨房", word: "grandma" }
    ]
  },
  {
    day: 2,
    title: "身体大发现",
    titleEn: "My Body",
    pages: [
      { text: "我的 head 上面有头发。", illustration: "🧠 小朋友摸头" },
      { text: "我用 hand 写字画画。", illustration: "🤚 用手写字" },
      { text: "我的 eye 可以看彩虹。", illustration: "👁️ 看彩虹" },
      { text: "我用 foot 走路跑步。", illustration: "🦶 跑步" },
      { text: "我的 mouth 可以吃好吃的！", illustration: "👄 吃东西" },
      { text: "我的 nose 闻花香！", illustration: "👃 闻花香" }
    ]
  },
  {
    day: 3,
    title: "农场小动物",
    titleEn: "Farm Animals",
    pages: [
      { text: "农场里有一只可爱的 cat。", illustration: "🐱 可爱的猫" },
      { text: "一只 dog 在门口守卫。", illustration: "🐶 忠诚的狗" },
      { text: "树上的 bird 在唱歌。", illustration: "🐦 小鸟唱歌" },
      { text: "水里的 fish 游来游去。", illustration: "🐟 鱼在游泳" },
      { text: "河边的 duck 嘎嘎叫。", illustration: "🦆 鸭子叫" },
      { text: "角落里有只 mouse！", illustration: "🐭 小老鼠" }
    ]
  },
  {
    day: 4,
    title: "彩色世界",
    titleEn: "Colorful World",
    pages: [
      { text: "苹果是 red 的。", illustration: "🔴 红苹果" },
      { text: "天空是 blue 的。", illustration: "🔵 蓝天" },
      { text: "草地是 green 的。", illustration: "🟢 绿草" },
      { text: "太阳是 yellow 的。", illustration: "🟡 太阳" },
      { text: "雪花是 white 的。", illustration: "⚪ 白雪" },
      { text: "黑夜是 black 的。", illustration: "⚫ 黑夜" }
    ]
  },
  {
    day: 5,
    title: "好吃的食物",
    titleEn: "Yummy Food",
    pages: [
      { text: "我喜欢吃红色的 apple。", illustration: "🍎 红苹果" },
      { text: "猴子喜欢黄色的 banana。", illustration: "🍌 香蕉" },
      { text: "早上喝一杯 milk。", illustration: "🥛 喝牛奶" },
      { text: "生日要吃 cake！", illustration: "🎂 生日蛋糕" },
      { text: "妈妈煎了一个 egg。", illustration: "🥚 煎鸡蛋" },
      { text: "我最爱吃 bread！", illustration: "🍞 面包" }
    ]
  },
  {
    day: 6,
    title: "数一数",
    titleEn: "Let's Count",
    pages: [
      { text: "one 只小猫在睡觉。", illustration: "1️⃣ 一只猫" },
      { text: "two 只小狗在玩耍。", illustration: "2️⃣ 两只狗" },
      { text: "three 只小鸟在唱歌。", illustration: "3️⃣ 三只鸟" },
      { text: "four 条小鱼在游泳。", illustration: "4️⃣ 四条鱼" },
      { text: "five 朵花在花园里。", illustration: "5️⃣ 五朵花" },
      { text: "six 个小朋友在玩！", illustration: "6️⃣ 六个小朋友" }
    ]
  },
  {
    day: 7,
    title: "大自然",
    titleEn: "Nature",
    pages: [
      { text: "白天有 bright 的 sun。", illustration: "☀️ 太阳" },
      { text: "晚上有安静的 moon。", illustration: "🌙 月亮" },
      { text: "天上有很多 star。", illustration: "⭐ 星星" },
      { text: "花园里有一棵大 tree。", illustration: "🌳 大树" },
      { text: "tree 旁边有漂亮的 flower。", illustration: "🌸 花朵" },
      { text: "草地上有很多 grass！", illustration: "🌿 小草" }
    ]
  },
  {
    day: 8,
    title: "我的一天",
    titleEn: "My Day",
    pages: [
      { text: "我早上 eat 麦片。", illustration: "🍽️ 吃早餐" },
      { text: "我 drink 一杯果汁。", illustration: "🥤 喝果汁" },
      { text: "晚上我要 sleep。", illustration: "😴 睡觉" },
      { text: "我和小狗一起 walk。", illustration: "🚶 散步" },
      { text: "放学后我 run 回家！", illustration: "🏃 跑回家" },
      { text: "我 sit 在椅子上看书。", illustration: "🪑 坐椅子" }
    ]
  },
  {
    day: 9,
    title: "上学啦",
    titleEn: "Going to School",
    pages: [
      { text: "我带了一本 book 去学校。", illustration: "📖 拿书" },
      { text: "我用 pen 写字。", illustration: "🖊️ 写字" },
      { text: "我把东西放进 bag 里。", illustration: "🎒 装书包" },
      { text: "我每天去 school。", illustration: "🏫 上学" },
      { text: "teacher 对我微笑。", illustration: "👨‍🏫 老师" },
      { text: "我坐在 desk 旁学习。", illustration: "🪑 课桌" }
    ]
  },
  {
    day: 10,
    title: "农场的朋友们",
    titleEn: "Friends on the Farm",
    pages: [
      { text: "rabbit 在草地上蹦蹦跳跳。", illustration: "🐰 兔子跳" },
      { text: "pig 在泥巴里打滚。", illustration: "🐷 小猪滚泥" },
      { text: "cow 给我们牛奶。", illustration: "🐮 奶牛" },
      { text: "horse 可以跑得很快。", illustration: "🐴 跑马" },
      { text: "chicken 会下蛋！", illustration: "🐔 下蛋" },
      { text: "sheep 在草地吃草。", illustration: "🐑 绵羊" }
    ]
  },
  {
    day: 11,
    title: "穿什么",
    titleEn: "What to Wear",
    pages: [
      { text: "我穿了一件 blue 的 shirt。", illustration: "👕 蓝衬衫" },
      { text: "姐姐穿了一条漂亮的 dress。", illustration: "👗 裙子" },
      { text: "太阳大的时候戴 hat。", illustration: "🎩 戴帽子" },
      { text: "出门要穿好 shoe。", illustration: "👟 穿鞋" },
      { text: "冬天要穿 warm 的 coat。", illustration: "🧥 穿外套" },
      { text: "我穿上干净的 sock！", illustration: "🧦 穿袜子" }
    ]
  },
  {
    day: 12,
    title: "水果派对",
    titleEn: "Fruit Party",
    pages: [
      { text: "orange 是橙色的圆圆的水果。", illustration: "🍊 橙子" },
      { text: "grape 一串一串的。", illustration: "🍇 葡萄" },
      { text: "watermelon 又大又甜！", illustration: "🍉 西瓜" },
      { text: "pear 的形状像铃铛。", illustration: "🍐 梨" },
      { text: "strawberry 上有小种子。", illustration: "🍓 草莓" },
      { text: "peach 甜甜的很好吃！", illustration: "🍑 桃子" }
    ]
  },
  {
    day: 13,
    title: "天气的变化",
    titleEn: "Weather Changes",
    pages: [
      { text: "下雨了，rain 滴滴答答。", illustration: "🌧️ 下雨" },
      { text: "下雪了，snow 白白的。", illustration: "❄️ 下雪" },
      { text: "风来了，wind 呼呼吹。", illustration: "💨 刮风" },
      { text: "天上有很多 cloud。", illustration: "☁️ 白云" },
      { text: "夏天很 hot！", illustration: "🔥 炎热" },
      { text: "冬天很 cold！", illustration: "🧊 寒冷" }
    ]
  },
  {
    day: 14,
    title: "我的感受",
    titleEn: "My Feelings",
    pages: [
      { text: "收到礼物我很 happy！", illustration: "😊 开心" },
      { text: "摔倒了我很 sad。", illustration: "😢 伤心" },
      { text: "被欺负了我很 angry。", illustration: "😠 生气" },
      { text: "看到大狗我很 scared。", illustration: "😨 害怕" },
      { text: "我对家人说 I love you！", illustration: "❤️ 爱" },
      { text: "跑完步我很 tired！", illustration: "😴 疲倦" }
    ]
  },
  {
    day: 15,
    title: "出发！",
    titleEn: "Let's Go!",
    pages: [
      { text: "爸爸开着 car 带我们去公园。", illustration: "🚗 开车" },
      { text: "我们坐 bus 去动物园。", illustration: "🚌 坐公交" },
      { text: "火车 train 跑得快！", illustration: "🚂 火车" },
      { text: "小 boat 在湖上飘。", illustration: "🚢 小船" },
      { text: "plane 在天上飞！", illustration: "✈️ 飞机" },
      { text: "我骑 bike 去学校！", illustration: "🚲 骑车" }
    ]
  },
  {
    day: 16,
    title: "去哪里",
    titleEn: "Where to Go",
    pages: [
      { text: "我最喜欢 home！", illustration: "🏠 家" },
      { text: "我们去 park 玩滑梯。", illustration: "🏞️ 公园" },
      { text: "妈妈去 shop 买东西。", illustration: "🛒 商店" },
      { text: "生病了要去 hospital。", illustration: "🏥 医院" },
      { text: "图书馆 library 有很多书。", illustration: "📚 图书馆" },
      { text: "周末去 zoo 看动物！", illustration: "🦁 动物园" }
    ]
  },
  {
    day: 17,
    title: "好吃的午餐",
    titleEn: "Yummy Lunch",
    pages: [
      { text: "中国人喜欢吃 rice。", illustration: "🍚 米饭" },
      { text: "面包 bread 很软。", illustration: "🍞 面包" },
      { text: "汤 soup 热乎乎的。", illustration: "🥣 汤" },
      { text: "小朋友喜欢 candy！", illustration: "🍬 糖果" },
      { text: "夏天最好吃 ice cream！", illustration: "🍦 冰淇淋" },
      { text: "奶奶做的 cookie 最好吃！", illustration: "🍪 饼干" }
    ]
  },
  {
    day: 18,
    title: "动起来！",
    titleEn: "Move It!",
    pages: [
      { text: "我们在公园 play。", illustration: "🤸 玩耍" },
      { text: "小青蛙喜欢 jump。", illustration: "🦘 跳" },
      { text: "小鸟喜欢 sing。", illustration: "🎤 唱歌" },
      { text: "蝴蝶喜欢 dance。", illustration: "💃 跳舞" },
      { text: "小鱼在水里 swim！", illustration: "🏊 游泳" },
      { text: "我喜欢 read 书！", illustration: "📖 阅读" }
    ]
  },
  {
    day: 19,
    title: "大和小",
    titleEn: "Big and Small",
    pages: [
      { text: "大象很 big！", illustration: "🦕 大象" },
      { text: "蚂蚁很 small。", illustration: "🐜 蚂蚁" },
      { text: "跑车跑得 fast！", illustration: "⚡ 快车" },
      { text: "乌龟走得 slow。", illustration: "🐢 慢龟" },
      { text: "我有一个 new 的书包！", illustration: "✨ 新书包" },
      { text: "这本书很 old 了。", illustration: "📚 旧书" }
    ]
  },
  {
    day: 20,
    title: "我的房间",
    titleEn: "My Room",
    pages: [
      { text: "书放在 table 上面。", illustration: "🪑 桌子" },
      { text: "我坐在 chair 上读书。", illustration: "💺 椅子" },
      { text: "晚上我在 bed 上睡觉。", illustration: "🛏️ 床" },
      { text: "有人敲 door！", illustration: "🚪 门" },
      { text: "我从 window 看外面。", illustration: "🪟 窗户" },
      { text: "晚上开 lamp！", illustration: "💡 开灯" }
    ]
  },
  {
    day: 21,
    title: "水的故事",
    titleEn: "Water Story",
    pages: [
      { text: "我每天喝 water。", illustration: "💧 水" },
      { text: "小河 river 流过村庄。", illustration: "🏞️ 河流" },
      { text: "大海 sea 很大很大！", illustration: "🌊 大海" },
      { text: "湖 lake 很平静。", illustration: "🏖️ 湖" },
      { text: "雨后有漂亮的 rainbow！", illustration: "🌈 彩虹" },
      { text: "我去 beach 玩沙子！", illustration: "🏖️ 海滩" }
    ]
  },
  {
    day: 22,
    title: "玩具箱",
    titleEn: "Toy Box",
    pages: [
      { text: "我和朋友踢 ball。", illustration: "⚽ 踢球" },
      { text: "我有很多 toy。", illustration: "🧸 玩具" },
      { text: "我们一起玩 game。", illustration: "🎮 游戏" },
      { text: "妹妹有一个 pink 的 doll。", illustration: "🪆 娃娃" },
      { text: "我们去放 kite！", illustration: "🪁 风筝" },
      { text: "我玩 puzzle 拼图！", illustration: "🧩 拼图" }
    ]
  },
  {
    day: 23,
    title: "一天的时间",
    titleEn: "Time of Day",
    pages: [
      { text: "morning 太阳升起来了！", illustration: "🌅 早晨" },
      { text: "night 天黑了，月亮出来了。", illustration: "🌃 夜晚" },
      { text: "today 是一个开心的一天！", illustration: "📅 今天" },
      { text: "tomorrow 我们去公园！", illustration: "🔜 明天" },
      { text: "yesterday 我学会了新单词。", illustration: "🔙 昨天" },
      { text: "一周是一个 week！", illustration: "📅 一周" }
    ]
  },
  {
    day: 24,
    title: "四季歌",
    titleEn: "Four Seasons Song",
    pages: [
      { text: "spring 花开了！", illustration: "🌱 春天" },
      { text: "summer 很热，可以去游泳！", illustration: "☀️ 夏天" },
      { text: "autumn 叶子变成黄色。", illustration: "🍂 秋天" },
      { text: "winter 会下雪！", illustration: "⛄ 冬天" },
      { text: "每个 season 都很美丽！", illustration: "🔄 季节" },
      { text: "今天的 weather 很好！", illustration: "🌤️ 天气" }
    ]
  },
  {
    day: 25,
    title: "动物园之旅",
    titleEn: "Zoo Trip",
    pages: [
      { text: "动物园里有 big 的 bear！", illustration: "🐻 熊" },
      { text: "lion 是草原之王！", illustration: "🦁 狮子" },
      { text: "tiger 有漂亮的条纹。", illustration: "🐯 老虎" },
      { text: "monkey 喜欢爬树！", illustration: "🐒 猴子" },
      { text: "elephant 有长长的鼻子！", illustration: "🐘 大象" },
      { text: "panda 喜欢吃竹子！", illustration: "🐼 熊猫" }
    ]
  },
  {
    day: 26,
    title: "谁在帮助我们",
    titleEn: "Who Helps Us",
    pages: [
      { text: "生病了 doctor 会帮忙。", illustration: "👨‍⚕️ 医生" },
      { text: "nurse 会照顾病人。", illustration: "👩‍⚕️ 护士" },
      { text: "cook 做好吃的饭菜！", illustration: "👨‍🍳 厨师" },
      { text: "farmer 种粮食给我们吃。", illustration: "👨‍🌾 农民" },
      { text: "police 保护我们的安全！", illustration: "👮 警察" },
      { text: "driver 送我们去想去的地方！", illustration: "🚗 司机" }
    ]
  },
  {
    day: 27,
    title: "学到新本领",
    titleEn: "New Skills",
    pages: [
      { text: "我喜欢 read 故事书。", illustration: "📖 读书" },
      { text: "我用 pencil write 我的名字。", illustration: "✍️ 写字" },
      { text: "我会 draw 一只 cat！", illustration: "🎨 画画" },
      { text: "小鸟可以 fly 很高！", illustration: "🦅 飞鸟" },
      { text: "小猴子喜欢 climb 树！", illustration: "🧗 爬树" },
      { text: "我学 cook 做菜！", illustration: "👨‍🍳 学做饭" }
    ]
  },
  {
    day: 28,
    title: "形状的世界",
    titleEn: "World of Shapes",
    pages: [
      { text: "轮子是 circle 的。", illustration: "⭕ 圆形" },
      { text: "窗户是 square 的。", illustration: "⬛ 方形" },
      { text: "用一条 line 画小路。", illustration: "➖ 线条" },
      { text: "球是 round 的！", illustration: "🔄 球形" },
      { text: "世界有好多 shape！", illustration: "🔷 形状" },
      { text: "三角形是 triangle！", illustration: "🔺 三角形" }
    ]
  },
  {
    day: 29,
    title: "感受世界",
    titleEn: "Feel the World",
    pages: [
      { text: "糖果很 sweet！", illustration: "🍭 甜" },
      { text: "冰淇淋很 cold。", illustration: "🧊 冷" },
      { text: "妈妈的手很 warm。", illustration: "🧣 温暖" },
      { text: "洗手后手很 clean。", illustration: "🧹 干净" },
      { text: "泥巴是 dirty 的！要洗手！", illustration: "🤮 脏" },
      { text: "毛绒玩具很 soft！", illustration: "🧸 柔软" }
    ]
  },
  {
    day: 30,
    title: "去哪里",
    titleEn: "Up and Down",
    pages: [
      { text: "小鸟飞 up 上天空！", illustration: "⬆️ 向上飞" },
      { text: "树叶落 down 到地上。", illustration: "⬇️ 落下" },
      { text: "小猫在 box in 里面。", illustration: "📥 在里面" },
      { text: "小狗跑 out 外面了！", illustration: "📤 在外面" },
      { text: "here 有好多漂亮的花！", illustration: "📍 这里" },
      { text: "there 有我的朋友！", illustration: "🗺️ 那里" }
    ]
  },
  {
    day: 31,
    title: "远近之间",
    titleEn: "Near and Far",
    pages: [
      { text: "公园就在 there！", illustration: "🗺️ 那里" },
      { text: "我家 near 学校。", illustration: "📏 很近" },
      { text: "大海很远 far。", illustration: "🛤️ 很远" },
      { text: "再来 again 一次！", illustration: "🔁 再来" },
      { text: "这个蛋糕 very 好吃！", illustration: "💯 非常" },
      { text: "我 always 准时！", illustration: "⏰ 总是" }
    ]
  },
  {
    day: 32,
    title: "我的好朋友",
    titleEn: "My Good Friend",
    pages: [
      { text: "那个 boy 是我的同学。", illustration: "👦 男孩" },
      { text: "那个 girl 喜欢画画。", illustration: "👧 女孩" },
      { text: "小 baby 在哭，需要哄。", illustration: "👶 宝宝" },
      { text: "你是我的 best friend！", illustration: "🤝 朋友" },
      { text: "请问你的 name 是什么？", illustration: "📛 名字" },
      { text: "每个 child 都需要爱！", illustration: "🧒 小孩" }
    ]
  },
  {
    day: 33,
    title: "家里的东西",
    titleEn: "Things at Home",
    pages: [
      { text: "我用 cup 喝水。", illustration: "🥤 杯子" },
      { text: "菜放在 plate 上面。", illustration: "🍽️ 盘子" },
      { text: "玩具放在 box 里。", illustration: "📦 盒子" },
      { text: "开门需要 key。", illustration: "🔑 钥匙" },
      { text: "晚上开 light！", illustration: "💡 开灯" },
      { text: "墙上有 clock！", illustration: "🕐 时钟" }
    ]
  },
  {
    day: 34,
    title: "长短高低",
    titleEn: "Long and Short",
    pages: [
      { text: "爷爷很 old，但很 wise。", illustration: "🏛️ 老人" },
      { text: "蛇的身体很 long！", illustration: "📏 长蛇" },
      { text: "小兔子的尾巴 short。", illustration: "📐 短尾" },
      { text: "长颈鹿很 tall！", illustration: "🗼 高长颈鹿" },
      { text: "这是一个 good 的故事！", illustration: "👍 好的" },
      { text: "那个是 bad 苹果！", illustration: "👎 坏的" }
    ]
  },
  {
    day: 35,
    title: "更多好吃的",
    titleEn: "More Yummy Food",
    pages: [
      { text: "我们一起吃 pizza！", illustration: "🍕 披萨" },
      { text: "我最喜欢 burger！", illustration: "🍔 汉堡" },
      { text: "我喜欢喝 orange juice。", illustration: "🧃 橙汁" },
      { text: "chocolate 又甜又好吃！", illustration: "🍫 巧克力" },
      { text: "中国人喜欢吃 noodle！", illustration: "🍜 面条" },
      { text: "我每天都吃 rice！", illustration: "🍚 米饭" }
    ]
  },
  {
    day: 36,
    title: "山和草地",
    titleEn: "Hills and Grass",
    pages: [
      { text: "小 hill 上有花。", illustration: "⛰️ 小山" },
      { text: "大 mountain 很高！", illustration: "🏔️ 高山" },
      { text: "草地上 grass 很绿。", illustration: "🌿 绿草" },
      { text: "秋天 leaf 变黄了。", illustration: "🍃 黄叶" },
      { text: "路上有很多 rock！", illustration: "🪨 石头" },
      { text: "我在 sand 里玩！", illustration: "🏖️ 沙子" }
    ]
  },
  {
    day: 37,
    title: "日常物品",
    titleEn: "Everyday Things",
    pages: [
      { text: "妈妈在用 phone。", illustration: "📱 手机" },
      { text: "墙上的 clock 指向八点。", illustration: "🕐 时钟" },
      { text: "我在 mirror 里看到自己。", illustration: "🪞 镜子" },
      { text: "我用 paper 画画。", illustration: "📄 纸" },
      { text: "墙上挂着漂亮的 picture！", illustration: "🖼️ 图片" },
      { text: "爸爸听 radio！", illustration: "📻 收音机" }
    ]
  },
  {
    day: 38,
    title: "礼貌用语",
    titleEn: "Polite Words",
    pages: [
      { text: "见面说 hello！", illustration: "👋 你好" },
      { text: "别人帮忙说 thank you！", illustration: "🙏 谢谢" },
      { text: "请求帮助说 please。", illustration: "🙏 请" },
      { text: "做错事说 sorry。", illustration: "😔 对不起" },
      { text: "离开说 bye bye！", illustration: "👋 再见" },
      { text: "我感到非常 sorry！", illustration: "😞 抱歉" }
    ]
  },
  {
    day: 39,
    title: "数到十",
    titleEn: "Count to Ten",
    pages: [
      { text: "seven 天是一周！", illustration: "7️⃣ 七天" },
      { text: "octopus 有 eight 条腿！", illustration: "8️⃣ 八" },
      { text: "nine 个小朋友在玩。", illustration: "9️⃣ 九个" },
      { text: "我有 ten 个手指！", illustration: "🔟 十" },
      { text: "一百是 hundred！", illustration: "💯 一百" },
      { text: "zero 就是什么都没有！", illustration: "0️⃣ 零" }
    ]
  },
  {
    day: 40,
    title: "花园里的小虫",
    titleEn: "Little Bugs in the Garden",
    pages: [
      { text: "bee 在花上采蜜。", illustration: "🐝 蜜蜂" },
      { text: "ant 在地上搬运食物。", illustration: "🐜 蚂蚁" },
      { text: "frog 从荷叶上跳下来！", illustration: "🐸 青蛙" },
      { text: "snail 走得 very slow。", illustration: "🐌 蜗牛" },
      { text: "butterfly 很 beautiful！", illustration: "🦋 蝴蝶" },
      { text: "spider 在织网！", illustration: "🕷️ 蜘蛛" }
    ]
  },
  {
    day: 41,
    title: "方位小助手",
    titleEn: "Direction Helper",
    pages: [
      { text: "过马路先看 left！", illustration: "⬅️ 左边" },
      { text: "再看 right 有没有车！", illustration: "➡️ 右边" },
      { text: "书放在架子的 top！", illustration: "⤴️ 顶部" },
      { text: "鞋放在架子的 bottom。", illustration: "⤵️ 底部" },
      { text: "我坐在 middle！", illustration: "↔️ 中间" },
      { text: "我站在 front 最前面！", illustration: "👆 前面" }
    ]
  },
  {
    day: 42,
    title: "开心的日子",
    titleEn: "Happy Days",
    pages: [
      { text: "我喜欢各种 color！", illustration: "🎨 颜色" },
      { text: "妈妈给我读 story。", illustration: "📚 故事" },
      { text: "我们一起唱 song！", illustration: "🎵 歌曲" },
      { text: "今天是我的 birthday！", illustration: "🎂 生日" },
      { text: "birthday 要开 party！", illustration: "🎉 派对" },
      { text: "我收到很多 gift！", illustration: "🎁 礼物" }
    ]
  },
  {
    day: 43,
    title: "形容一下",
    titleEn: "Describe It",
    pages: [
      { text: "花园里的花很 beautiful！", illustration: "🌺 美丽" },
      { text: "小猴子很 funny！", illustration: "🤣 好笑" },
      { text: "爸爸很 strong！", illustration: "💪 强壮" },
      { text: "图书馆很 quiet。", illustration: "🤫 安静" },
      { text: "奶奶很 kind，给我做 cookie！", illustration: "🥰 善良" },
      { text: "我是一个很 smart 的孩子！", illustration: "🧠 聪明" }
    ]
  },
  {
    day: 44,
    title: "表达心愿",
    titleEn: "Express Yourself",
    pages: [
      { text: "I want 去公园！", illustration: "🙋 想要" },
      { text: "I like 吃 ice cream！", illustration: "👍 喜欢" },
      { text: "我来 help 你！", illustration: "🆘 帮助" },
      { text: "Look！一只 butterfly！", illustration: "👀 看" },
      { text: "Listen！小鸟在 sing！", illustration: "👂 听" },
      { text: "我 need 你的帮助！", illustration: "❓ 需要" }
    ]
  },
  {
    day: 45,
    title: "学会了很多",
    titleEn: "We Learned a Lot",
    pages: [
      { text: "open 你的书，我们来读！", illustration: "📂 打开" },
      { text: "读完 close 你的书。", illustration: "📁 关闭" },
      { text: "红灯要 stop！", illustration: "🛑 停止" },
      { text: "绿灯可以 go！", illustration: "🏃‍♂️ 走" },
      { text: "朋友，come 来玩！", illustration: "🫳 来" },
      { text: "我们 finish 了！太棒了！", illustration: "✅ 完成" }
    ]
  }
];