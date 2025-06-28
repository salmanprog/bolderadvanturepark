import React from 'react'
import { useNavigate } from 'react-router-dom'; // ← import useNavigate
import ContentWrapper from '../../../components/shared/contentWrapper';
import { Button } from "antd";

const HomePage = () => {
  const navigate = useNavigate(); // ← initialize the hook

  return (
    <section className="main-content d-flex align-items-center justify-content-center min-vh-100">
      <div className='row'>
        <div className="col-sm-12 vv text-center">
            Welcome to Site
        </div>
      </div>
    </section>
  );
}

export default React.memo(HomePage);
