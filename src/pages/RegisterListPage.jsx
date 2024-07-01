import styled from 'styled-components';
import { OnsaleProduct } from '../components/MyPage/OnsaleProduct';

const productData = [
  {
    id: 1,
    name: '바시티 컬시브 레터링 데님 언스트럭쳐 볼캡 뉴욕양키스',
    price: 49000,
    options: [
      {
        color: 'black',
        urls: [
          'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png',
          'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png',
        ],
        sizes: [
          { size: 'S', stock: 20 },
          { size: 'M', stock: 10 },
          { size: 'L', stock: 0 },
        ],
      },
      {
        color: 'blue',
        urls: [
          'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png',
          'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png',
        ],
        sizes: [
          { size: 'S', stock: 10 },
          { size: 'M', stock: 10 },
          { size: 'L', stock: 20 },
        ],
      },
    ],
  },
  {
    id: 1,
    name: '바시티 컬시브 레터링 데님 언스트럭쳐 볼캡 뉴욕양키스',
    price: 49000,
    options: [
      {
        color: 'black',
        urls: [
          'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png',
          'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png',
        ],
        sizes: [
          { size: 'S', stock: 20 },
          { size: 'M', stock: 10 },
          { size: 'L', stock: 0 },
        ],
      },
      {
        color: 'blue',
        urls: [
          'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png',
          'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png',
        ],
        sizes: [
          { size: 'S', stock: 10 },
          { size: 'M', stock: 10 },
          { size: 'L', stock: 20 },
        ],
      },
    ],
  },
  {
    id: 1,
    name: '바시티 컬시브 레터링 데님 언스트럭쳐 볼캡 뉴욕양키스',
    price: 49000,
    options: [
      {
        color: 'black',
        urls: [
          'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png',
          'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png',
        ],
        sizes: [
          { size: 'S', stock: 20 },
          { size: 'M', stock: 10 },
          { size: 'L', stock: 0 },
        ],
      },
      {
        color: 'blue',
        urls: [
          'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png',
          'https://static-resource.mlb-korea.com/cdn-cgi/image/q=75,w=652,format=auto,fit=contain,onerror=redirect/images/goods/ec/M21N3ACP6601N50SAP/thnail/97E668F33405423A866D7D469FB19C41.png',
        ],
        sizes: [
          { size: 'S', stock: 10 },
          { size: 'M', stock: 10 },
          { size: 'L', stock: 20 },
        ],
      },
    ],
  },
];

const RegisterListPageContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 600;
`;

const RegisterListPage = () => {
  return (
    <RegisterListPageContainer>
      <Title>판매중인 상품</Title>
      {productData.map((data) => (
        <OnsaleProduct id={data.id} name={data.name} price={data.price} options={data.options} />
      ))}
    </RegisterListPageContainer>
  );
};

export default RegisterListPage;
