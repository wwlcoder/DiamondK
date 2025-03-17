import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
	en: {
		translation: {
			"club": "♦️  Poker Club",
			"our_games": "Our Games",
			"testimonials": "Testimonials",
			"rules": "Rules",

			"rules_header1": "Hand Ranks",
			"hand": "Poker Hand",
			"hand_examples": "Examples",
			"royalflush": "Royal Flush",
			"straightflush": "Straight Flush",
			"quads": "Four of a Kind",
			"fullhouse": "Full House",
			"flush": "Flush",
			"straight": "Straight",
			"trips": "Three of a Kind",
			"twopairs": "Two Pair",
			"pair": "Pair",
			"highcard": "High Card",

			"rules_header2": "Anatomy of a Texas Hold'em Hand",
			"procedures_1": "Blinds are placed and cards are shuffled",
			"procedures_2": "Players are dealt two cards face down",
			"procedures_3": "First round of bets, clockwise after the blinds",
			"procedures_4": "Dealer burns top card and deals three cards face-up (FLOP)",
			"procedures_5": "Second betting round, starting with the player left of the dealer",
			"procedures_6": "Dealer burns a card and deals a single card face-up (TURN)",
			"procedures_7": "Third round of bets, same as the second",
			"procedures_8": "Dealer burns a card and deals the fifth card face-up (RIVER)",
			"procedures_9": "Remaining players make the best five-card hand they can using the table and hole cards",
			"procedures_10": "Final round of bets, same as the previous",
			"procedures_11": "Players reveal their hands (SHOWDOWN)",
			"procedures_12": "Winner takes the pot!",

			"rules_header3": "How to Play the Squid Game",
			"squid1": "One squid marker per player at the table",
			"squid2": "A marker placed in the pot per hand",
			"squid3": "Win a hand outright and show your cards to win the marker",
			"squid4": "Anyone without a marker after all markers are distributed has to pay a bounty to each person with a marker",
			"squid5": "More markers collected translates to more bounties",
			"squid6": "For more thrilling action, there is a multiplier component for more markers collected",

			"hero1": "Experience the most action-packed No Limit Texas Hold'em Poker game in Sihanoukville!",
			"hero2": "No tight professional players who plays GTO ranges.Only action junkies who loves to gamble and have fun!",
			"hero3": "For Fun and Action-Packed Poker. Think ♦️K Poker",

			"games_header_1": "Experience an Action-Packed Game!",
			"games_section_1a": "$1/$2 with frequent straddles from action-packed players who loves big pots",
			"games_section_1b": "$1/$3 Squid Texas Holdem. Enjoy high-stakes-thrills at affordable stakes!",

			"games_header_2": "Frequent Straddles and Action = Big Wins!",
			"games_section_2a": "Minimum Buy-in at only $100!",
			"games_section_2b": "Frequent straddles from acion players",
			"games_section_2c": "Win big with just a small buy-in!",

			"games_header_3": "Freebies for maximum enjoyment!",
			"games_section_3a": "Free drinks, fresh fruits, cigarettes and food for all players",
			"games_section_3b": "Win bonus jackpots when you hit big hands or take down a pot with 72 after the flop is dealt",


			"testimonial_1": "I had a blast playing the action-packed games. The fun atmosphere and deep stacks kept me entertained for hours! No boring players who only sat and waited for cards",
			"testimonial_1_owner": "Mr. Gu",
			"testimonial_2": "I come to♦️ K Poker for the thrill and fun. Unlike other games in Sihanoukville which has tight regular house players, there are only action junkies here who shove their stacks in readily whenever there are chances to win.",
			"testimonial_2_owner": "Mr. Xie",
			"testimonial_3": " K Poker offers an action-packed game with a fun atmosphere and deep stacks that keep you coming back for more excitement.",
			"testimonial_3_owner": "Mr. Bin",

			"footer_contact": "Contact ♦️ K Poker",
			"phone": "Phone",
			"footer_address1": "Find Us Here!",
			"footer_address2": "ZheShang Casino, Sihanoukville, KH 18000"
		}
	},
	zh: {
		translation: {
			"club": "♦️K 扑克俱乐部",
			"our_games": "我们的游戏",
			"testimonials": "推荐信",
			"rules": "规则",

			"rules_header1": "扑克手牌排名",
			"hand": "扑克手牌",
			"hand_examples": "例子",
			"royalflush": "皇家同花顺",
			"straightflush": "同花顺",
			"quads": "四条",
			"fullhouse": "葫芦",
			"flush": "同花",
			"straight": "顺子",
			"trips": "三条",
			"twopairs": "两对",
			"pair": "一对",
			"highcard": "高牌",

			"rules_header2": "德州扑克手牌解析",
			"procedures_1": "盲注下注，牌局开始",
			"procedures_2": "玩家发两张底牌",
			"procedures_3": "第一轮下注，从大盲下一家开始",
			"procedures_4": "牌手烧一张牌，发三张公共牌（翻牌）",
			"procedures_5": "第二轮下注，从庄家左边开始",
			"procedures_6": "牌手烧一张牌，发一张公共牌（转牌）",
			"procedures_7": "第三轮下注，和第二轮一样",
			"procedures_8": "牌手烧一张牌，发最后一张公共牌（河牌）",
			"procedures_9": "剩下的玩家用手牌和公共牌组成最好的五张牌",
			"procedures_10": "最后一轮下注，和之前一样",
			"procedures_11": "玩家亮牌，比大小",
			"procedures_12": "赢家拿走底池！",

			"rules_header3": "如何玩鱿鱼游戏",
			"squid1": "每个玩家一个鱿鱼标记",
			"squid2": "每手一个鱿鱼标记放入底池",
			"squid3": "赢得一手并亮牌，赢得鱿鱼标记",
			"squid4": "所有鱿鱼标记分发后，没有鱿鱼标记的人必须向每个有鱿鱼标记的人支付赏金",
			"squid5": "收集更多鱿鱼标记意味着更多赏金",
			"squid6": "为了更刺激的动作，收集更多鱿鱼标记的玩家有更高的赏金",

			"testimonial_1": "我在♦️K玩得很开心。欢乐的氛围和超深的筹码让我娱乐通宵！没有那些只等牌的紧逼玩家。",
			"testimonial_1_owner": "顾先生",
			"testimonial_2": "我来♦️ K俱乐部是为了刺激和乐趣。这里不像西港其他德州局，一堆紧逼的顶脚玩家。这里只有行动多，入池率高的玩家。他们只要有点获胜的机会，就随时准备将筹码全部推入池底",
			"testimonial_2_owner": "谢先生",
			"testimonial_3": "♦️K 俱乐部提供高入池率的玩家，欢乐的氛围和超深的筹码。让你不断回来寻求更多的刺激。",
			"testimonial_3_owner": "斌先生",

			"games_header_1": "劲爆游戏体验",
			"games_section_1a": "$1/$2德州扑克，高入池率玩家经常straddle，喜欢大底池!",
			"games_section_1b": "$1/$3鱿鱼扑克。享受高额玩家的刺激玩法!",

			"games_header_2": "高入池率玩家!",
			"games_section_2a": "最低买入只需$100",
			"games_section_2b": "高入池率玩家经常straddle",
			"games_section_2c": "小额买入，大额赢取",

			"games_header_3": "您负责娱乐!",
			"games_section_3a": "免费饮料，新鲜水果，香烟和餐饮",
			"games_section_3b": "恭喜您拿到大牌或者手拿27在翻牌后拿下地池。本局有而外奖励！",

			"hero1": "体验西港最好玩的德州扑克游戏!",
			"hero2": "没有紧逼职牌，只有热爱娱乐的高入池率玩家！",
			"hero3": "♦️K 扑克俱乐部, 您优质德州体验的首选",
			"footer_contact": "联系♦️ K扑克",
			"phone": "电话",
			"footer_address1": "我们在这里！",
			"footer_address2": "浙商赌场，西港18000"
		}
	}
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',
		debug: true,
		interpolation: {
			escapeValue: false, // React already does escaping
		},
	});

export default i18n;
