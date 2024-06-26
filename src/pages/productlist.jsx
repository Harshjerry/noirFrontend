import React from "react";
import Navbar from "./../components/navbar";
import Announcement from "./../components/announcement";
import Products from "./../components/products";
import Newsletter from "./../components/newsletter";
import Footer from "./../components/footer";
import styled from "styled-components";
import { mobile } from "../responsive";
 import { useLocation } from "react-router-dom";
 import {useState}from "react";

const Option = styled.option``;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Container=styled.div``
const FilterContainer=styled.div` display:flex;
justify-content:space-between;`
const Filter=styled.div`margin:20px;  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const Title=styled.h1`margin:20px;`;
const FilterText= styled.span`font-size:20px;
font-weight:600;
margin-right: 20px;
`


const ProductList=()=>{

  const location =useLocation();
const cat=location.pathname.split("/")[2];

const [filter,setFilter]=useState({});
const [sort,setSort]=useState("Newest");
const handleFilters=(e)=>{
  const value=e.target.value;
  setFilter({...filter,
    [e.target.name]:value })
}

  return(<Container>
    <Announcement/>
<Navbar/>

<Title> Dresses</Title>
<FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled >
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e=>setSort(e.target.value)}>
            <Option value="Newest" selected>Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="dsc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

<Products cat={cat} filter={filter} sort={sort}/>
<Newsletter/>
<Footer/>
</Container>);
}

export default ProductList;
