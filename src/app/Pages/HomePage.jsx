import styled from '@emotion/styled'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import { TYPES } from '../context/types'

const HomeContainer = styled.div`
  z-index: 1;
`
const BannerTaglineContainer = styled.div`
  background-color: #eaeaec;
  color: #3E4152;
  padding: 0.5rem;
  text-align: center;
  font-size: 16px;
  font-family: sans-serif;
`

const BannerTagline = styled.h2`
  display: inline;
  font-size: 16px;
  font-weight: inherit;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const TaglineLink = styled(Link)`
  text-decoration: underline;
  color: #3E4152;
  font-weight: 700;
  cursor: pointer;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const BannerLink = styled(Link)``

const Banner = styled.img`
  width: 100%;
  cursor: pointer;
`;

const Title = styled.h3`
  margin: 48px 1rem 16px;
  font-size: 38px;
  font-weight: 700;
  text-align: center;
  color: #3e4152;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  flex-direction: row;
  flex-wrap: wrap;
  word-break: break-all;
  cursor: pointer;
  margin: 1rem;
`

const Card = styled(Link)`
  text-decoration: none;
  color: #2e2e2e;
`

const Vector = styled.img`
  width: 170px;
  height: 170px;
  margin: 16px;
  border-radius: 50%;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  @media (max-width: 768px) {
    width: 105px;
    height: 105px;
  }
`

const Subtitle = styled.h3`
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const HomePage = () => {

  const { dispatch } = useContext(StoreContext);

  return (
    <HomeContainer>
      <BannerTaglineContainer>
        <BannerTagline>Discounts on various products upto 60% Off &#62;&#62; </BannerTagline>
        <TaglineLink to="/shop">ShopNow</TaglineLink>
      </BannerTaglineContainer>

      <BannerLink to="/shop">
        <Banner alt='Banner' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1696838570/landing-page-images/r6qfrh7g80cgb95qovhp.png' />
      </BannerLink>

      <Title>Featured Categories</Title>

      <CardContainer>
        <Card to="/shop" onClick={() =>
          dispatch({
            type: TYPES.SELECT_PRODUCT_FILTER,
            payload: {
              filterType: TYPES.SORT_BY_CATEGORY,
              input: "T-shirts",
            },
          })
        }>
          <Vector alt='Shirt image' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1696529786/landing-page-images/landing%20page%20filter%20imgs/zqhlyekgya6m8mkfzj8t.png' />

          <Subtitle>Shirts</Subtitle>
        </Card>

        <Card to="/shop" onClick={() =>
          dispatch({
            type: TYPES.SELECT_PRODUCT_FILTER,
            payload: {
              filterType: TYPES.SORT_BY_CATEGORY,
              input: "Sweatshirts",
            },
          })
        }>
          <Vector alt='Sweat-shirt image' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1696529787/landing-page-images/landing%20page%20filter%20imgs/elcsn8to1mn0owogsgwr.png' />
          <Subtitle>Sweat-Shirts</Subtitle>
        </Card>

        <Card to="/shop" onClick={() =>
          dispatch({
            type: TYPES.SELECT_PRODUCT_FILTER,
            payload: {
              filterType: TYPES.SORT_BY_CATEGORY,
              input: "Track Pants",
            },
          })
        }>
          <Vector alt='Track-pants image' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1696529786/landing-page-images/landing%20page%20filter%20imgs/udgirbbj8jziqp3fddn9.png' />

          <Subtitle>Track-Pants</Subtitle>
        </Card>

        <Card to="/shop" onClick={() =>
          dispatch({
            type: TYPES.SELECT_PRODUCT_FILTER,
            payload: {
              filterType: TYPES.SORT_BY_CATEGORY,
              input: "Shoes",
            },
          })
        }>
          <Vector alt='Shoes Page' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1696529786/landing-page-images/landing%20page%20filter%20imgs/tra0flh0d3cf02oectdz.png' />

          <Subtitle>Shoes</Subtitle>
        </Card>
      </CardContainer>

      <Title>Best of Brands</Title>

      <CardContainer>
        <Card to="/shop" onClick={() =>
          dispatch({
            type: TYPES.SELECT_PRODUCT_FILTER,
            payload: {
              filterType: TYPES.SORT_BY_BRAND,
              input: "NIKE",
            },
          })
        }>
          <Vector alt='Nike symbol' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1696529785/landing-page-images/landing%20page%20filter%20imgs/nqoencagrdw36jdqjwzr.png' />

          <Subtitle>Nike</Subtitle>
        </Card>

        <Card to="/shop" onClick={() =>
          dispatch({
            type: TYPES.SELECT_PRODUCT_FILTER,
            payload: {
              filterType: TYPES.SORT_BY_BRAND,
              input: "HRX",
            },
          })
        }>
          <Vector alt='HRX symbol' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1696529785/landing-page-images/landing%20page%20filter%20imgs/gabbb8b1d66a1iftkld4.png' />

          <Subtitle>Hrx</Subtitle>
        </Card>

        <Card to="/shop" onClick={() =>
          dispatch({
            type: TYPES.SELECT_PRODUCT_FILTER,
            payload: {
              filterType: TYPES.SORT_BY_BRAND,
              input: "ADIDAS",
            },
          })
        }>
          <Vector alt='Adidas symbol' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1696529785/landing-page-images/landing%20page%20filter%20imgs/dpf7og8vcv687ragtdda.png' />

          <Subtitle>Adidas</Subtitle>
        </Card>

        <Card to="/shop" onClick={() =>
          dispatch({
            type: TYPES.SELECT_PRODUCT_FILTER,
            payload: {
              filterType: TYPES.SORT_BY_BRAND,
              input: "UNDERARMOUR",
            },
          })
        }>
          <Vector alt='UA symbol' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1696529786/landing-page-images/landing%20page%20filter%20imgs/qezwwsmi9cfqo9sowx8c.png' />

          <Subtitle>UA</Subtitle>
        </Card>

        <Card to="/shop" onClick={() =>
          dispatch({
            type: TYPES.SELECT_PRODUCT_FILTER,
            payload: {
              filterType: TYPES.SORT_BY_BRAND,
              input: "PUMA",
            },
          })
        }>
          <Vector alt='Puma symbol' src='https://res.cloudinary.com/dkavbodkk/image/upload/v1696529785/landing-page-images/landing%20page%20filter%20imgs/btpeypvgoaxx0m8xc2ic.png' />

          <Subtitle>Puma</Subtitle>
        </Card>
      </CardContainer>

    </HomeContainer>
  )
}

export default HomePage
