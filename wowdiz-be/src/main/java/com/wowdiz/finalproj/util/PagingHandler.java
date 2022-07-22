package com.wowdiz.finalproj.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;


import com.wowdiz.finalproj.dto.QNADto;

public class PagingHandler {

	private Integer totalCount; //총 갯수
	private Integer perPage;//한페이지당 보여질 글의 갯수
	private Integer perBlock;//한블력당 보여질 페이지수
	private Integer totalPage;//총 페이지수
	private Integer startNum; //한페이지에서 보여질 시작 글 번호
	private Integer startPage;// 한블럭에서 보여질 시작페이지 번호
	private Integer endPage;// 한블럭에서 보여질 끝 페이지 번호
	private Integer no; //각페이지당 보여질 시작번호
	
	public PagingHandler(Integer totalCount, Integer currentPage, Integer perPage, Integer perBlock) {

		this.totalCount=totalCount;
		totalPage=totalCount/perPage+(totalCount%perPage==0?0:1);
		startPage=(currentPage-1)/perBlock*perBlock+1;
		endPage=startPage+perBlock-1;
		
		if(endPage>totalPage) {
	         endPage=totalPage;         
	      }
		
		 startNum=(currentPage-1)*perPage;
		 no=totalCount-(currentPage-1)*perPage;
		 
	}
	
	
	public Map<String, Object> paging(List<QNADto> list) {

	 List<QNADto> boardList=list;
	 
	 Vector<Integer> parr=new Vector<>();
      for(int pp=startPage;pp<=endPage;pp++) {
    	  parr.add(pp);
      }
      
      Map<String,Object> map1 = new HashMap<>();
      map1.put("list", boardList);
      map1.put("parr", parr);
      map1.put("totalCount", totalCount);
      map1.put("totalPage", totalPage);
      map1.put("startPage", startPage);
      map1.put("endPage", endPage);
      map1.put("no", no);
      return map1;
	}


	public Integer getTotalCount() {
		return totalCount;
	}


	public void setTotalCount(Integer totalCount) {
		this.totalCount = totalCount;
	}


	public Integer getPerPage() {
		return perPage;
	}


	public void setPerPage(Integer perPage) {
		this.perPage = perPage;
	}


	public Integer getPerBlock() {
		return perBlock;
	}


	public void setPerBlock(Integer perBlock) {
		this.perBlock = perBlock;
	}


	public Integer getTotalPage() {
		return totalPage;
	}


	public void setTotalPage(Integer totalPage) {
		this.totalPage = totalPage;
	}


	public Integer getStartNum() {
		return startNum;
	}


	public void setStartNum(Integer startNum) {
		this.startNum = startNum;
	}


	public Integer getStartPage() {
		return startPage;
	}


	public void setStartPage(Integer startPage) {
		this.startPage = startPage;
	}


	public Integer getEndPage() {
		return endPage;
	}


	public void setEndPage(Integer endPage) {
		this.endPage = endPage;
	}


	public Integer getNo() {
		return no;
	}


	public void setNo(Integer no) {
		this.no = no;
	}
	
	
}
