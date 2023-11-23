import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Button, Spinner } from "react-bootstrap";
import "./custom.css";
import axios from "axios";
import DataFetch from "./DataFetch.js";
import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

const RequestModal = ({ isOpen, searchItem }) => {
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const request = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/request/all/${searchItem}`
      );
      console.log("sent scrape api request");
      console.log(response);
    } catch (error) {
      console.error("Error with scraper: ", error);
    }
  };

  const fetchData = async () => {
    try {
      const result = await DataFetch("all", searchItem);
      navigate("/data", {
        state: {
          response: result,
          searchItem: searchItem,
          isModalOpen: false,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("requesting...");
    request().then(() => {
      fetchData();

      // navigate("/data", {
      //   state: { response: result, searchItem: searchItem },
      // });
    });

  }, [searchItem, navigate]);

  return (
    <Modal isOpen={isOpen} style={customStyles} contentLabel="Example Modal">
      <h2>
        We didn't have that item in our database. Finding the best deals for
        you...
      </h2>
      <Spinner animation="grow" role="status"></Spinner>
    </Modal>
  );
};

export default RequestModal;
