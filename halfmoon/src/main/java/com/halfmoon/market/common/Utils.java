package com.halfmoon.market.common;

public class Utils {
	//시간처리 함수
	 public static String timeFormatter(String show_time) {
	        int time = Integer.parseInt(show_time);
	        String set_time = "";
	        if (time < 60) {
	            set_time = String.valueOf(time) + "초 전";
	        } else if (time < 3600) {
	            set_time = String.valueOf(time / 60) + "분 전";
	        } else if (time < 86400) {
	            set_time = String.valueOf(time / 3600) + "시간 전";
	        } else if (time < 604800) {
	            set_time = String.valueOf(time / 86400) + "일 전";
	        } else if (time < 2592000) {
	            set_time = String.valueOf(time / 604800) + "주 전";
	        } else if (time < 31104000) {
	            set_time = String.valueOf(time / 2592000) + "달 전";
	        } else {
	            set_time = String.valueOf(time / 31104000) + "년 전";
	        }
	        return set_time;
	    }

}
