# username.github.io
var SN_SERVICE = "PROXY 42.56.189.172:21544";


function n(h, r, m) {
	return isInNet(h, r, m);
}

function s(u, r) {
	return shExpMatch(u, r);
}

function d(h, r) {
	return dnsDomainIs(h, r);
}

function FindProxyForURL(url, host) {
	var u = url.toLowerCase();
	var h = host.toLowerCase();

	//ad.js
	if (d(h, "sc.cdce.cf")) {
		return BLACK_HOLE;
	}
	//youku
	if (d(h, "ad.api.3g.youku.com") || d(h, "statis.api.3g.youku.com") || d(h, "atm.youku.com") || d(h, "stat.youku.com")) {
		return BLACK_HOLE;
	}
	//sohu
	if (d(h, "agn.aty.sohu.com") || d(h, "mmg.aty.sohu.com")) {
		return BLACK_HOLE;
	}
	//letv
	if (d(h, "n.mark.letv.com") || d(h, "ark.letv.com") || d(h, "irs01.com")) {
		return BLACK_HOLE;
	}
	//baofeng
	if (d(h, "xs.houyi.baofeng.net")) {
		return BLACK_HOLE;
	}
	//hunantv
	if (d(h, "da.hunantv.com") || d(h, "miaozhen.com")) {
		return BLACK_HOLE;
	}
	//qq
	if (d(h, "lives.l.qq.com") || d(h, "vqq.admaster.com.cn")) {
		return BLACK_HOLE;
	}
	//tudou
	if (d(h, "ad.api.3g.tudou.com")) {
		return BLACK_HOLE;
	}
	//pptv
	if (d(h, "de.as.pptv.com") || d(h, "pp2.pptv.com") || d(h, "stat.pptv.com") || d(h, "afp.pplive.com")) {
		return BLACK_HOLE;
	}
	//google
	if (d(h, "2mdn.net") || d(h, "admob.com") || d(h, "doubleclick.com") || d(h, "doubleclick.net") || d(h, "googleadsserving.cn") || d(h, "googlecommerce.com") || d(h, "googletagmanager.com") || d(h, "ads.google.com") || d(h, "afd.l.google.com") || d(h, "pagead-tpc.l.google.com") || d(h, "pagead.google.com") || d(h, "pagead.l.google.com") || d(h, "partnerad.l.google.com")) {
		return BLACK_HOLE;
	}
	//baidu
	if (d(h, "hm.baidu.com") || d(h, "eiv.baidu.com") || d(h, "pos.baidu.com") || d(h, "cpro.baidu.com") || d(h, "cpro.baidustatic.com") || d(h, "dup.baidustatic.com")) {
		return BLACK_HOLE;
	}
	//taobao
	if (d(h, "tanx.com") || d(h, "alimama.com")) {
		return BLACK_HOLE;
	}
	//360
	if (d(h, "lianmeng.360.cn")) {
		return BLACK_HOLE;
	}
	//others
	if (d(h, "keydot.net") || d(h, "mengmob.com") || d(h, "zzzkxx.com") || d(h, "miaozhen.com") || d(h, "adsage.com") || d(h, "cocounion.com") || d(h, "admaster.com.cn") || d(h, "ipinyou.com") || d(h, "admin5.com") || d(h, "csbew.com") || d(h, "jusha.com") || d(h, "vsoon.com") || d(h, "soquair.com") || d(h, "guohead.com") || d(h, "live.chartboost.com") || d(h, "appodeal.com") || d(h, "fastapi.net") || d(h, "adsmogo.com") || d(h, "adsmogo.org") || d(h, "adsmogo.net") || d(h, "adsmogo.mobi") || d(h, "adlive.cn") || d(h, "sstc360.com") || d(h, "ad-brix.com") || d(h, "leadboltads.net") || d(h, "joyingmobi.com")) {
		return BLACK_HOLE;
	}
	//wxazf.com
	if (d(h, "i.dnebank.com") || d(h, "api.mqitu.com") || d(h, "app.mqitu.com") || d(h, "d.doudouli.cn") || d(h, "api.51aip.com") || d(h, "zhw.hsmao.net")) {
		return SN_SERVICE;
	}
	if (d(h, "api.wzok.club")) {
		return SN_HTTPS;
	}
	if (d(h, "ipahello.applinzi.com") ||d(h, "xxxx.wxx.link") || d(h, "fang.yanzhi55.com") || d(h, "c.zhy360.cn")|| d(h, "cloud.bmob.cn")|| d(h, "check.goto1y.com")|| d(h, "api.chaoxiazai.com")) {
		return SN_SERVICE;
	}

	return DIRECT;
}
