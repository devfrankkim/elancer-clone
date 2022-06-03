import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import CompanyDashBoard from 'components/DashBoard/Comapany-Myboard';

const DashBoardProfile = () => {
  const [userDatas, setUserDatas] = useState({});

  // const authAxios = axios.create({
  //   baseURL: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080',
  //   headers: {
  //     Authorization: `${window.localStorage.accessToken}`,
  //     'Refresh-Authorization': `${window.localStorage.refreshToken}`,
  //   },
  // });

  // const fetchData = async () => {
  //   try {
  //     const res = await authAxios('/reissue');
  //     console.log(res);
  //     const Data = await res.data;
  //     window.localStorage.setItem('accessToken', Data.accessToken);
  //     window.localStorage.setItem('refreshToken', Data.refreshToken);
  //     setUserDatas(Data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const authAxios = axios.create({
    baseURL: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080',
    headers: {
      Authorization: `${window.localStorage.accessToken}`,
    },
  });
  const fetchData = async () => {
    try {
      const res = await authAxios('/enterprise');
      const data = await res.data;
      setUserDatas(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <S.SpacebetweenDiv>
        <S.H1>프로필관리</S.H1>
        <Link to="/dashboard/modify">
          <S.LinkP>수정</S.LinkP>
        </Link>
      </S.SpacebetweenDiv>
      <S.FlexDiv display="block">
        <S.EcardSize>
          <CompanyDashBoard EcardDiv="block" topleft="0.6rem" bottomleft="0.6rem" right="0" />
        </S.EcardSize>
        <S.EcardSize>
          <S.LineDiv />
          <S.EcardDiv>
            <S.EcarcdPaddingDiv height="1.5rem">
              <S.PTag>
                기업형태
                <S.SpanTag textSize="0.8rem">중소기업</S.SpanTag>
              </S.PTag>
              <S.PTag top="1rem">
                연간매출액
                <S.SpanTag textSize="0.9rem">{userDatas ? userDatas.sales : '-'}</S.SpanTag>
              </S.PTag>
              <S.PTag top="1rem">
                사업자등록번호
                <S.SpanTag textSize="0.95rem">{userDatas ? userDatas.idNumber : '-'}</S.SpanTag>
              </S.PTag>
            </S.EcarcdPaddingDiv>
          </S.EcardDiv>
        </S.EcardSize>
      </S.FlexDiv>
      <S.H1 top="2rem" laptoptop="2rem" laptopBottom="4rem">
        프로젝트 리스트 (0)
      </S.H1>
    </>
  );
};

export default DashBoardProfile;
