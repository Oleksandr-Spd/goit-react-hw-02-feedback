import styled from 'styled-components';

export const StatisticsList = styled.ul`
  width: 500px;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
`;

export const StatisticsItem = styled.li`
  width: 480px;
  height: 40px;
  font-size: 20px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  border-radius: 20px;
  padding: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
