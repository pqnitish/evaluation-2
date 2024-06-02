import {
  Container,
  SimpleGrid,
  Flex,
  Button,
  HStack,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";
import ShowProduct from "../components/ShowProduct";
export default function Home() {
    const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sortOrderValue, setSortOrderValue] = useState("");
  const [filterValue, setFilteRvalue] = useState("");
  async function fetchAndUpadateData(sortOrderValue, filterValue) {
    setLoading(true);
    try {
      let queryParams = {};
      if (filterValue) {
        queryParams.category = filterValue;
      }
      if (sortOrderValue) {
        queryParams._sort = "price";
        queryParams._order = sortOrderValue;
      }
      let res = await axios({
        method: "get",
        url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products",
      });
      // console.log(res.data);
      let data = res.data;
      setProducts(data);
      setError(false);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchAndUpadateData(filterValue, sortOrderValue);
  }, [filterValue, sortOrderValue]);
  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <ErrorIndicator />;
  }
  return (
    <Container maxW="Container.xl">
        <Flex>
        <Button colorScheme="red" variant="outline"
      onClick={()=>navigate(/product/details)}
      >
      More Details
      </Button>
        </Flex>
        <HStack>
        <Select placeholder='Sort by Price'
        onChange={(e)=>setSortOrderValue(e.target.value)}
        value={sortOrderValue}
        >
  <option value='asc'>Low to High</option>
  <option value='desc'>High to Low</option>
  
</Select>
<Select placeholder='Filter by Category'
        onChange={(e)=>setFilteRvalue(e.target.value)}
        value={filterValue}
        >
  <option value='men'>Men</option>
  <option value='kids'>Kids</option>
  <option value='women'>Woman</option>
  <option value='homedecor'>Homedecor</option>
  
</Select>
        </HStack>
        <SimpleGrid column={{base:1,md:2,lg:3}} spacing={10}>
            {products?.map((product)=>(
                <ShowProduct {...product} key={product.id}/>


            ))}
            </SimpleGrid>

     

    </Container>
  );
}
