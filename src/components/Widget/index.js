import styled from 'styled-components';

const Widget = styled.div`
margin-top: 15px;
margin-bottom: 25px;
border: 1px solid ${({theme }) => theme.colors.primary};
background-color: #1C1814;
border-radius: 4px;
overflow: hidden;

h1, h2, h3{
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0;
}
p{
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
}

`;

Widget.Content = styled.div`
padding: 24px 32px 32px 32px;

& > *:first-child{
  margin-top: 0;
}
& > *:last-child{
  margin-bottom: 0;
}
ul {
  list-style: none;
  padding: 0;
}
`;

Widget.Header = styled.header`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 15px 27.5px;
background-color: ${({theme}) => theme.colors.primary};

`;

Widget.Topic = styled.a`

outline: 0;
text-decoration: none;
color: ${({theme }) => theme.colors.contrastText};
background-color: ${({ theme }) => theme.colors.alternative_color};
padding: 10px 15px;
margin-bottom: 8px;
cursor: pointer;
border-radius: ${({ theme}) => theme.borderRadius};

transition: .3s;
display: block;

&:hover,
&:focus {
  opacity: .5;
}
`;







export default Widget;