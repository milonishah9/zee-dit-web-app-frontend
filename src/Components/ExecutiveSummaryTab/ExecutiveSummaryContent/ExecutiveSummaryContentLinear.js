import React, { useState } from "react";
import "./ExecutiveSummaryContentLinear.css";
import BubbleChart from "../../Charts/BubbleChart/BubbleChart";
import FrontBar from "../../Charts/BubbleChart/LinearBarchart/FrontBar";
import ExecutiveSummaryContentLinearContents from "./ExecutiveSummaryContentLinearContents";
import ExecutiveSummaryContentLinearButtonsTabs from "./ExecutiveSummaryContentLinearButtonsTabs";
import { useEffect } from "react";

const ExecutiveSummaryContentLinear = (props) => {
  const [activeTab, setActiveTab] = useState("all-content");

  var hoverData = "";
  const [myData, setMyData] = useState("");
  useEffect(() => {}, [hoverData]);

  let top10files = [];
  let count = 0;
  let bottom10files = [];


  var json = [
    {
      Name: "Kundli Bhagya",
      type:'tv show',
      Count: 589.17,
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUAmf8Al/8Alf8Ak/8Am/8AnP8Akf/////r9v+84f/2/P/H6P/Z8f/h8v/t+v8Onv92v/+ExP/k9v+23v9Drv+Ozv+04f9pu/9Lq/+Cx/8spP9Suf8yqv92xf9EtP/n8v9nwP9as/+V0/+12P+s2/9it//z+f+h1P+a0P/N7P9ar/8cp/+f2P9xxP+m0v9ptf/B6f+s3v/N5/8/1SRZAAADnklEQVR4nO3Xy3qiShSGYVYVHgAFFNGWaIzn2NpJdt//xe0ChQRQO4MOncH3jvh9sGRJsaqwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwvouwgsJUU2QoCS6wb8d5A0jKnqiKr8jfVpwf6y+zl2vE853l2uTQJ154XTfOKK/E2aYXpQNEgOZ8qwSDynGibj1OODUq8w2n++jr1ususRNvxV+FrPPx9vtBKvE2W/Tdz5jYeHoIsB7tePHk9+Xv7SmxS8iBKRFR75f+QtKK+Mlkpz0svtBLvkNFjOxvIdno6HXe31ybrWX9/JTYqvzfJcCKWbP1R9oHMhmEt3h8nn47bTnr0PDxXIqGb1OM/EXimBj12LrNI1gddjbkPzaRethx35nYnvWl+1iJW1fhPmLv0U6y2O8gbzqSjq/FyOIqLGTt9qJWoQrdtyc9szmc5XuhK/LIi7hEdOea6W+4yn2yz3VEq8XI46kaXuqd+rTeqpLdSZjL28skoD91EleMX1nGd1m310PPMD8vjblY8l91HVY75oYzcfVqinvsTVRnIfuqezD+lVkVnSv8bXY5Nrxj67TDsdJ/aklbYfW+ZiydVju97gsCNArHm7rJU4I+3g985zLSkFUbFqmC7I12OTVco4SB83ow3ZsUzFb5PocWTLscP+5xRP5KpXy7QCsJw8Lx5i+1yha1yha3mK7SyVSwZm4n0yXuYlrjzhpNqUzTjSGt52Ohvdg8vV9fyTIc4lp/D49XnMKXmnej6QOpoSlDT0oNXiX/94j9HvZi9SMt9LJqnm0g5fjx76of96PrCphYrVe6lQbmX/mF39GXUy7C2AF5dD61zF9WXjlrTXuzVN1wP013L2Dw/p3wTY0X1WMi6aNZRrw20mJsXpUO+iQm6v2qxWfk0TIbmIsxG9NwgZXTZl36MuUsXzTrq+zj5Tdp20gXv2T+PrAZ+ti8txwbJaJvu+UUrL3tU7E0v0Cbqvteqx/NXtu6li5qlv9hk2pNZ+m6h2sf+OP0s6W3MW7W0R+5K12OTFS77vXgehv+5v89bjdbePYXhyXXsazETJHlZkrxP00H3LQ7D6bizyf4LCXrDePJr3InlSmySBJO140TrsHj7mbw4zrqYk5V4m0oG2UD5amde6k2+FRslYtu2SClbN+MdyjJnqvI35WYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAN/M/2rBCF/4WGjgAAAAASUVORK5CYII=",
      arr: [320, 230, 100, 330, 410],
    },
    {
      Name: "Bhagya Lakshmi",
      type:'tv show',
      Count: 491.58,
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUAmf8Al/8Alf8Ak/8Am/8AnP8Akf/////r9v+84f/2/P/H6P/Z8f/h8v/t+v8Onv92v/+ExP/k9v+23v9Drv+Ozv+04f9pu/9Lq/+Cx/8spP9Suf8yqv92xf9EtP/n8v9nwP9as/+V0/+12P+s2/9it//z+f+h1P+a0P/N7P9ar/8cp/+f2P9xxP+m0v9ptf/B6f+s3v/N5/8/1SRZAAADnklEQVR4nO3Xy3qiShSGYVYVHgAFFNGWaIzn2NpJdt//xe0ChQRQO4MOncH3jvh9sGRJsaqwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwvouwgsJUU2QoCS6wb8d5A0jKnqiKr8jfVpwf6y+zl2vE853l2uTQJ154XTfOKK/E2aYXpQNEgOZ8qwSDynGibj1OODUq8w2n++jr1ususRNvxV+FrPPx9vtBKvE2W/Tdz5jYeHoIsB7tePHk9+Xv7SmxS8iBKRFR75f+QtKK+Mlkpz0svtBLvkNFjOxvIdno6HXe31ybrWX9/JTYqvzfJcCKWbP1R9oHMhmEt3h8nn47bTnr0PDxXIqGb1OM/EXimBj12LrNI1gddjbkPzaRethx35nYnvWl+1iJW1fhPmLv0U6y2O8gbzqSjq/FyOIqLGTt9qJWoQrdtyc9szmc5XuhK/LIi7hEdOea6W+4yn2yz3VEq8XI46kaXuqd+rTeqpLdSZjL28skoD91EleMX1nGd1m310PPMD8vjblY8l91HVY75oYzcfVqinvsTVRnIfuqezD+lVkVnSv8bXY5Nrxj67TDsdJ/aklbYfW+ZiydVju97gsCNArHm7rJU4I+3g985zLSkFUbFqmC7I12OTVco4SB83ow3ZsUzFb5PocWTLscP+5xRP5KpXy7QCsJw8Lx5i+1yha1yha3mK7SyVSwZm4n0yXuYlrjzhpNqUzTjSGt52Ohvdg8vV9fyTIc4lp/D49XnMKXmnej6QOpoSlDT0oNXiX/94j9HvZi9SMt9LJqnm0g5fjx76of96PrCphYrVe6lQbmX/mF39GXUy7C2AF5dD61zF9WXjlrTXuzVN1wP013L2Dw/p3wTY0X1WMi6aNZRrw20mJsXpUO+iQm6v2qxWfk0TIbmIsxG9NwgZXTZl36MuUsXzTrq+zj5Tdp20gXv2T+PrAZ+ti8txwbJaJvu+UUrL3tU7E0v0Cbqvteqx/NXtu6li5qlv9hk2pNZ+m6h2sf+OP0s6W3MW7W0R+5K12OTFS77vXgehv+5v89bjdbePYXhyXXsazETJHlZkrxP00H3LQ7D6bizyf4LCXrDePJr3InlSmySBJO140TrsHj7mbw4zrqYk5V4m0oG2UD5amde6k2+FRslYtu2SClbN+MdyjJnqvI35WYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAN/M/2rBCF/4WGjgAAAAASUVORK5CYII=",
      arr: [120, 430, 209, 330, 300],
    },
    {
      Name: "Kumkum Bhagya",
      type:'tv show',
      Count: 469.60,
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUAmf8Al/8Alf8Ak/8Am/8AnP8Akf/////r9v+84f/2/P/H6P/Z8f/h8v/t+v8Onv92v/+ExP/k9v+23v9Drv+Ozv+04f9pu/9Lq/+Cx/8spP9Suf8yqv92xf9EtP/n8v9nwP9as/+V0/+12P+s2/9it//z+f+h1P+a0P/N7P9ar/8cp/+f2P9xxP+m0v9ptf/B6f+s3v/N5/8/1SRZAAADnklEQVR4nO3Xy3qiShSGYVYVHgAFFNGWaIzn2NpJdt//xe0ChQRQO4MOncH3jvh9sGRJsaqwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwvouwgsJUU2QoCS6wb8d5A0jKnqiKr8jfVpwf6y+zl2vE853l2uTQJ154XTfOKK/E2aYXpQNEgOZ8qwSDynGibj1OODUq8w2n++jr1ususRNvxV+FrPPx9vtBKvE2W/Tdz5jYeHoIsB7tePHk9+Xv7SmxS8iBKRFR75f+QtKK+Mlkpz0svtBLvkNFjOxvIdno6HXe31ybrWX9/JTYqvzfJcCKWbP1R9oHMhmEt3h8nn47bTnr0PDxXIqGb1OM/EXimBj12LrNI1gddjbkPzaRethx35nYnvWl+1iJW1fhPmLv0U6y2O8gbzqSjq/FyOIqLGTt9qJWoQrdtyc9szmc5XuhK/LIi7hEdOea6W+4yn2yz3VEq8XI46kaXuqd+rTeqpLdSZjL28skoD91EleMX1nGd1m310PPMD8vjblY8l91HVY75oYzcfVqinvsTVRnIfuqezD+lVkVnSv8bXY5Nrxj67TDsdJ/aklbYfW+ZiydVju97gsCNArHm7rJU4I+3g985zLSkFUbFqmC7I12OTVco4SB83ow3ZsUzFb5PocWTLscP+5xRP5KpXy7QCsJw8Lx5i+1yha1yha3mK7SyVSwZm4n0yXuYlrjzhpNqUzTjSGt52Ohvdg8vV9fyTIc4lp/D49XnMKXmnej6QOpoSlDT0oNXiX/94j9HvZi9SMt9LJqnm0g5fjx76of96PrCphYrVe6lQbmX/mF39GXUy7C2AF5dD61zF9WXjlrTXuzVN1wP013L2Dw/p3wTY0X1WMi6aNZRrw20mJsXpUO+iQm6v2qxWfk0TIbmIsxG9NwgZXTZl36MuUsXzTrq+zj5Tdp20gXv2T+PrAZ+ti8txwbJaJvu+UUrL3tU7E0v0Cbqvteqx/NXtu6li5qlv9hk2pNZ+m6h2sf+OP0s6W3MW7W0R+5K12OTFS77vXgehv+5v89bjdbePYXhyXXsazETJHlZkrxP00H3LQ7D6bizyf4LCXrDePJr3InlSmySBJO140TrsHj7mbw4zrqYk5V4m0oG2UD5amde6k2+FRslYtu2SClbN+MdyjJnqvI35WYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAN/M/2rBCF/4WGjgAAAAASUVORK5CYII=",
      arr: [223, 140, 170, 330, 400],
    },
    {
      Name: "Meet",
      type:'tv show',
      Count: 439.94,
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUAmf8Al/8Alf8Ak/8Am/8AnP8Akf/////r9v+84f/2/P/H6P/Z8f/h8v/t+v8Onv92v/+ExP/k9v+23v9Drv+Ozv+04f9pu/9Lq/+Cx/8spP9Suf8yqv92xf9EtP/n8v9nwP9as/+V0/+12P+s2/9it//z+f+h1P+a0P/N7P9ar/8cp/+f2P9xxP+m0v9ptf/B6f+s3v/N5/8/1SRZAAADnklEQVR4nO3Xy3qiShSGYVYVHgAFFNGWaIzn2NpJdt//xe0ChQRQO4MOncH3jvh9sGRJsaqwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwvouwgsJUU2QoCS6wb8d5A0jKnqiKr8jfVpwf6y+zl2vE853l2uTQJ154XTfOKK/E2aYXpQNEgOZ8qwSDynGibj1OODUq8w2n++jr1ususRNvxV+FrPPx9vtBKvE2W/Tdz5jYeHoIsB7tePHk9+Xv7SmxS8iBKRFR75f+QtKK+Mlkpz0svtBLvkNFjOxvIdno6HXe31ybrWX9/JTYqvzfJcCKWbP1R9oHMhmEt3h8nn47bTnr0PDxXIqGb1OM/EXimBj12LrNI1gddjbkPzaRethx35nYnvWl+1iJW1fhPmLv0U6y2O8gbzqSjq/FyOIqLGTt9qJWoQrdtyc9szmc5XuhK/LIi7hEdOea6W+4yn2yz3VEq8XI46kaXuqd+rTeqpLdSZjL28skoD91EleMX1nGd1m310PPMD8vjblY8l91HVY75oYzcfVqinvsTVRnIfuqezD+lVkVnSv8bXY5Nrxj67TDsdJ/aklbYfW+ZiydVju97gsCNArHm7rJU4I+3g985zLSkFUbFqmC7I12OTVco4SB83ow3ZsUzFb5PocWTLscP+5xRP5KpXy7QCsJw8Lx5i+1yha1yha3mK7SyVSwZm4n0yXuYlrjzhpNqUzTjSGt52Ohvdg8vV9fyTIc4lp/D49XnMKXmnej6QOpoSlDT0oNXiX/94j9HvZi9SMt9LJqnm0g5fjx76of96PrCphYrVe6lQbmX/mF39GXUy7C2AF5dD61zF9WXjlrTXuzVN1wP013L2Dw/p3wTY0X1WMi6aNZRrw20mJsXpUO+iQm6v2qxWfk0TIbmIsxG9NwgZXTZl36MuUsXzTrq+zj5Tdp20gXv2T+PrAZ+ti8txwbJaJvu+UUrL3tU7E0v0Cbqvteqx/NXtu6li5qlv9hk2pNZ+m6h2sf+OP0s6W3MW7W0R+5K12OTFS77vXgehv+5v89bjdbePYXhyXXsazETJHlZkrxP00H3LQ7D6bizyf4LCXrDePJr3InlSmySBJO140TrsHj7mbw4zrqYk5V4m0oG2UD5amde6k2+FRslYtu2SClbN+MdyjJnqvI35WYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAN/M/2rBCF/4WGjgAAAAASUVORK5CYII=",
      arr: [120, 430, 209, 330, 300],
    },
    {
      Name: "Radha Mohan",
      type:'tv show',
      Count: 437.68,
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUAmf8Al/8Alf8Ak/8Am/8AnP8Akf/////r9v+84f/2/P/H6P/Z8f/h8v/t+v8Onv92v/+ExP/k9v+23v9Drv+Ozv+04f9pu/9Lq/+Cx/8spP9Suf8yqv92xf9EtP/n8v9nwP9as/+V0/+12P+s2/9it//z+f+h1P+a0P/N7P9ar/8cp/+f2P9xxP+m0v9ptf/B6f+s3v/N5/8/1SRZAAADnklEQVR4nO3Xy3qiShSGYVYVHgAFFNGWaIzn2NpJdt//xe0ChQRQO4MOncH3jvh9sGRJsaqwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwvouwgsJUU2QoCS6wb8d5A0jKnqiKr8jfVpwf6y+zl2vE853l2uTQJ154XTfOKK/E2aYXpQNEgOZ8qwSDynGibj1OODUq8w2n++jr1ususRNvxV+FrPPx9vtBKvE2W/Tdz5jYeHoIsB7tePHk9+Xv7SmxS8iBKRFR75f+QtKK+Mlkpz0svtBLvkNFjOxvIdno6HXe31ybrWX9/JTYqvzfJcCKWbP1R9oHMhmEt3h8nn47bTnr0PDxXIqGb1OM/EXimBj12LrNI1gddjbkPzaRethx35nYnvWl+1iJW1fhPmLv0U6y2O8gbzqSjq/FyOIqLGTt9qJWoQrdtyc9szmc5XuhK/LIi7hEdOea6W+4yn2yz3VEq8XI46kaXuqd+rTeqpLdSZjL28skoD91EleMX1nGd1m310PPMD8vjblY8l91HVY75oYzcfVqinvsTVRnIfuqezD+lVkVnSv8bXY5Nrxj67TDsdJ/aklbYfW+ZiydVju97gsCNArHm7rJU4I+3g985zLSkFUbFqmC7I12OTVco4SB83ow3ZsUzFb5PocWTLscP+5xRP5KpXy7QCsJw8Lx5i+1yha1yha3mK7SyVSwZm4n0yXuYlrjzhpNqUzTjSGt52Ohvdg8vV9fyTIc4lp/D49XnMKXmnej6QOpoSlDT0oNXiX/94j9HvZi9SMt9LJqnm0g5fjx76of96PrCphYrVe6lQbmX/mF39GXUy7C2AF5dD61zF9WXjlrTXuzVN1wP013L2Dw/p3wTY0X1WMi6aNZRrw20mJsXpUO+iQm6v2qxWfk0TIbmIsxG9NwgZXTZl36MuUsXzTrq+zj5Tdp20gXv2T+PrAZ+ti8txwbJaJvu+UUrL3tU7E0v0Cbqvteqx/NXtu6li5qlv9hk2pNZ+m6h2sf+OP0s6W3MW7W0R+5K12OTFS77vXgehv+5v89bjdbePYXhyXXsazETJHlZkrxP00H3LQ7D6bizyf4LCXrDePJr3InlSmySBJO140TrsHj7mbw4zrqYk5V4m0oG2UD5amde6k2+FRslYtu2SClbN+MdyjJnqvI35WYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAN/M/2rBCF/4WGjgAAAAASUVORK5CYII=",
      arr: [120, 140, 170, 330, 400],
    },
    {
      Name: "Mithai",
      type:'movie',
      Count: 427.30,
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUAmf8Al/8Alf8Ak/8Am/8AnP8Akf/////r9v+84f/2/P/H6P/Z8f/h8v/t+v8Onv92v/+ExP/k9v+23v9Drv+Ozv+04f9pu/9Lq/+Cx/8spP9Suf8yqv92xf9EtP/n8v9nwP9as/+V0/+12P+s2/9it//z+f+h1P+a0P/N7P9ar/8cp/+f2P9xxP+m0v9ptf/B6f+s3v/N5/8/1SRZAAADnklEQVR4nO3Xy3qiShSGYVYVHgAFFNGWaIzn2NpJdt//xe0ChQRQO4MOncH3jvh9sGRJsaqwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwvouwgsJUU2QoCS6wb8d5A0jKnqiKr8jfVpwf6y+zl2vE853l2uTQJ154XTfOKK/E2aYXpQNEgOZ8qwSDynGibj1OODUq8w2n++jr1ususRNvxV+FrPPx9vtBKvE2W/Tdz5jYeHoIsB7tePHk9+Xv7SmxS8iBKRFR75f+QtKK+Mlkpz0svtBLvkNFjOxvIdno6HXe31ybrWX9/JTYqvzfJcCKWbP1R9oHMhmEt3h8nn47bTnr0PDxXIqGb1OM/EXimBj12LrNI1gddjbkPzaRethx35nYnvWl+1iJW1fhPmLv0U6y2O8gbzqSjq/FyOIqLGTt9qJWoQrdtyc9szmc5XuhK/LIi7hEdOea6W+4yn2yz3VEq8XI46kaXuqd+rTeqpLdSZjL28skoD91EleMX1nGd1m310PPMD8vjblY8l91HVY75oYzcfVqinvsTVRnIfuqezD+lVkVnSv8bXY5Nrxj67TDsdJ/aklbYfW+ZiydVju97gsCNArHm7rJU4I+3g985zLSkFUbFqmC7I12OTVco4SB83ow3ZsUzFb5PocWTLscP+5xRP5KpXy7QCsJw8Lx5i+1yha1yha3mK7SyVSwZm4n0yXuYlrjzhpNqUzTjSGt52Ohvdg8vV9fyTIc4lp/D49XnMKXmnej6QOpoSlDT0oNXiX/94j9HvZi9SMt9LJqnm0g5fjx76of96PrCphYrVe6lQbmX/mF39GXUy7C2AF5dD61zF9WXjlrTXuzVN1wP013L2Dw/p3wTY0X1WMi6aNZRrw20mJsXpUO+iQm6v2qxWfk0TIbmIsxG9NwgZXTZl36MuUsXzTrq+zj5Tdp20gXv2T+PrAZ+ti8txwbJaJvu+UUrL3tU7E0v0Cbqvteqx/NXtu6li5qlv9hk2pNZ+m6h2sf+OP0s6W3MW7W0R+5K12OTFS77vXgehv+5v89bjdbePYXhyXXsazETJHlZkrxP00H3LQ7D6bizyf4LCXrDePJr3InlSmySBJO140TrsHj7mbw4zrqYk5V4m0oG2UD5amde6k2+FRslYtu2SClbN+MdyjJnqvI35WYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAN/M/2rBCF/4WGjgAAAAASUVORK5CYII=",
      arr: [320, 230, 100, 330, 400],
    },
    {
      Name: "Tere Bin Jiya Jaye Na",
      type:'tv show',
      Count: 400.64,
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUAmf8Al/8Alf8Ak/8Am/8AnP8Akf/////r9v+84f/2/P/H6P/Z8f/h8v/t+v8Onv92v/+ExP/k9v+23v9Drv+Ozv+04f9pu/9Lq/+Cx/8spP9Suf8yqv92xf9EtP/n8v9nwP9as/+V0/+12P+s2/9it//z+f+h1P+a0P/N7P9ar/8cp/+f2P9xxP+m0v9ptf/B6f+s3v/N5/8/1SRZAAADnklEQVR4nO3Xy3qiShSGYVYVHgAFFNGWaIzn2NpJdt//xe0ChQRQO4MOncH3jvh9sGRJsaqwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwvouwgsJUU2QoCS6wb8d5A0jKnqiKr8jfVpwf6y+zl2vE853l2uTQJ154XTfOKK/E2aYXpQNEgOZ8qwSDynGibj1OODUq8w2n++jr1ususRNvxV+FrPPx9vtBKvE2W/Tdz5jYeHoIsB7tePHk9+Xv7SmxS8iBKRFR75f+QtKK+Mlkpz0svtBLvkNFjOxvIdno6HXe31ybrWX9/JTYqvzfJcCKWbP1R9oHMhmEt3h8nn47bTnr0PDxXIqGb1OM/EXimBj12LrNI1gddjbkPzaRethx35nYnvWl+1iJW1fhPmLv0U6y2O8gbzqSjq/FyOIqLGTt9qJWoQrdtyc9szmc5XuhK/LIi7hEdOea6W+4yn2yz3VEq8XI46kaXuqd+rTeqpLdSZjL28skoD91EleMX1nGd1m310PPMD8vjblY8l91HVY75oYzcfVqinvsTVRnIfuqezD+lVkVnSv8bXY5Nrxj67TDsdJ/aklbYfW+ZiydVju97gsCNArHm7rJU4I+3g985zLSkFUbFqmC7I12OTVco4SB83ow3ZsUzFb5PocWTLscP+5xRP5KpXy7QCsJw8Lx5i+1yha1yha3mK7SyVSwZm4n0yXuYlrjzhpNqUzTjSGt52Ohvdg8vV9fyTIc4lp/D49XnMKXmnej6QOpoSlDT0oNXiX/94j9HvZi9SMt9LJqnm0g5fjx76of96PrCphYrVe6lQbmX/mF39GXUy7C2AF5dD61zF9WXjlrTXuzVN1wP013L2Dw/p3wTY0X1WMi6aNZRrw20mJsXpUO+iQm6v2qxWfk0TIbmIsxG9NwgZXTZl36MuUsXzTrq+zj5Tdp20gXv2T+PrAZ+ti8txwbJaJvu+UUrL3tU7E0v0Cbqvteqx/NXtu6li5qlv9hk2pNZ+m6h2sf+OP0s6W3MW7W0R+5K12OTFS77vXgehv+5v89bjdbePYXhyXXsazETJHlZkrxP00H3LQ7D6bizyf4LCXrDePJr3InlSmySBJO140TrsHj7mbw4zrqYk5V4m0oG2UD5amde6k2+FRslYtu2SClbN+MdyjJnqvI35WYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAN/M/2rBCF/4WGjgAAAAASUVORK5CYII=",
      arr: [120, 230, 100, 330, 300],
    },
    {
      Name: "Kashibia Bajirao Balal ",
      type:'movie',
      Count: 391.60,
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUAmf8Al/8Alf8Ak/8Am/8AnP8Akf/////r9v+84f/2/P/H6P/Z8f/h8v/t+v8Onv92v/+ExP/k9v+23v9Drv+Ozv+04f9pu/9Lq/+Cx/8spP9Suf8yqv92xf9EtP/n8v9nwP9as/+V0/+12P+s2/9it//z+f+h1P+a0P/N7P9ar/8cp/+f2P9xxP+m0v9ptf/B6f+s3v/N5/8/1SRZAAADnklEQVR4nO3Xy3qiShSGYVYVHgAFFNGWaIzn2NpJdt//xe0ChQRQO4MOncH3jvh9sGRJsaqwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwvouwgsJUU2QoCS6wb8d5A0jKnqiKr8jfVpwf6y+zl2vE853l2uTQJ154XTfOKK/E2aYXpQNEgOZ8qwSDynGibj1OODUq8w2n++jr1ususRNvxV+FrPPx9vtBKvE2W/Tdz5jYeHoIsB7tePHk9+Xv7SmxS8iBKRFR75f+QtKK+Mlkpz0svtBLvkNFjOxvIdno6HXe31ybrWX9/JTYqvzfJcCKWbP1R9oHMhmEt3h8nn47bTnr0PDxXIqGb1OM/EXimBj12LrNI1gddjbkPzaRethx35nYnvWl+1iJW1fhPmLv0U6y2O8gbzqSjq/FyOIqLGTt9qJWoQrdtyc9szmc5XuhK/LIi7hEdOea6W+4yn2yz3VEq8XI46kaXuqd+rTeqpLdSZjL28skoD91EleMX1nGd1m310PPMD8vjblY8l91HVY75oYzcfVqinvsTVRnIfuqezD+lVkVnSv8bXY5Nrxj67TDsdJ/aklbYfW+ZiydVju97gsCNArHm7rJU4I+3g985zLSkFUbFqmC7I12OTVco4SB83ow3ZsUzFb5PocWTLscP+5xRP5KpXy7QCsJw8Lx5i+1yha1yha3mK7SyVSwZm4n0yXuYlrjzhpNqUzTjSGt52Ohvdg8vV9fyTIc4lp/D49XnMKXmnej6QOpoSlDT0oNXiX/94j9HvZi9SMt9LJqnm0g5fjx76of96PrCphYrVe6lQbmX/mF39GXUy7C2AF5dD61zF9WXjlrTXuzVN1wP013L2Dw/p3wTY0X1WMi6aNZRrw20mJsXpUO+iQm6v2qxWfk0TIbmIsxG9NwgZXTZl36MuUsXzTrq+zj5Tdp20gXv2T+PrAZ+ti8txwbJaJvu+UUrL3tU7E0v0Cbqvteqx/NXtu6li5qlv9hk2pNZ+m6h2sf+OP0s6W3MW7W0R+5K12OTFS77vXgehv+5v89bjdbePYXhyXXsazETJHlZkrxP00H3LQ7D6bizyf4LCXrDePJr3InlSmySBJO140TrsHj7mbw4zrqYk5V4m0oG2UD5amde6k2+FRslYtu2SClbN+MdyjJnqvI35WYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAN/M/2rBCF/4WGjgAAAAASUVORK5CYII=",
      arr: [120, 230, 100, 330, 410],
    },
    {
      Name: "Rab Se Hai Dua",
      type:'movie',
      Count: 351.28,
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUAmf8Al/8Alf8Ak/8Am/8AnP8Akf/////r9v+84f/2/P/H6P/Z8f/h8v/t+v8Onv92v/+ExP/k9v+23v9Drv+Ozv+04f9pu/9Lq/+Cx/8spP9Suf8yqv92xf9EtP/n8v9nwP9as/+V0/+12P+s2/9it//z+f+h1P+a0P/N7P9ar/8cp/+f2P9xxP+m0v9ptf/B6f+s3v/N5/8/1SRZAAADnklEQVR4nO3Xy3qiShSGYVYVHgAFFNGWaIzn2NpJdt//xe0ChQRQO4MOncH3jvh9sGRJsaqwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwvouwgsJUU2QoCS6wb8d5A0jKnqiKr8jfVpwf6y+zl2vE853l2uTQJ154XTfOKK/E2aYXpQNEgOZ8qwSDynGibj1OODUq8w2n++jr1ususRNvxV+FrPPx9vtBKvE2W/Tdz5jYeHoIsB7tePHk9+Xv7SmxS8iBKRFR75f+QtKK+Mlkpz0svtBLvkNFjOxvIdno6HXe31ybrWX9/JTYqvzfJcCKWbP1R9oHMhmEt3h8nn47bTnr0PDxXIqGb1OM/EXimBj12LrNI1gddjbkPzaRethx35nYnvWl+1iJW1fhPmLv0U6y2O8gbzqSjq/FyOIqLGTt9qJWoQrdtyc9szmc5XuhK/LIi7hEdOea6W+4yn2yz3VEq8XI46kaXuqd+rTeqpLdSZjL28skoD91EleMX1nGd1m310PPMD8vjblY8l91HVY75oYzcfVqinvsTVRnIfuqezD+lVkVnSv8bXY5Nrxj67TDsdJ/aklbYfW+ZiydVju97gsCNArHm7rJU4I+3g985zLSkFUbFqmC7I12OTVco4SB83ow3ZsUzFb5PocWTLscP+5xRP5KpXy7QCsJw8Lx5i+1yha1yha3mK7SyVSwZm4n0yXuYlrjzhpNqUzTjSGt52Ohvdg8vV9fyTIc4lp/D49XnMKXmnej6QOpoSlDT0oNXiX/94j9HvZi9SMt9LJqnm0g5fjx76of96PrCphYrVe6lQbmX/mF39GXUy7C2AF5dD61zF9WXjlrTXuzVN1wP013L2Dw/p3wTY0X1WMi6aNZRrw20mJsXpUO+iQm6v2qxWfk0TIbmIsxG9NwgZXTZl36MuUsXzTrq+zj5Tdp20gXv2T+PrAZ+ti8txwbJaJvu+UUrL3tU7E0v0Cbqvteqx/NXtu6li5qlv9hk2pNZ+m6h2sf+OP0s6W3MW7W0R+5K12OTFS77vXgehv+5v89bjdbePYXhyXXsazETJHlZkrxP00H3LQ7D6bizyf4LCXrDePJr3InlSmySBJO140TrsHj7mbw4zrqYk5V4m0oG2UD5amde6k2+FRslYtu2SClbN+MdyjJnqvI35WYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAN/M/2rBCF/4WGjgAAAAASUVORK5CYII=",
      arr: [120, 230, 100, 330, 400],
    },
    {
      Name: "Main Hoon Aparajita",
      type:'movie',
      Count: 350.70,
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUAmf8Al/8Alf8Ak/8Am/8AnP8Akf/////r9v+84f/2/P/H6P/Z8f/h8v/t+v8Onv92v/+ExP/k9v+23v9Drv+Ozv+04f9pu/9Lq/+Cx/8spP9Suf8yqv92xf9EtP/n8v9nwP9as/+V0/+12P+s2/9it//z+f+h1P+a0P/N7P9ar/8cp/+f2P9xxP+m0v9ptf/B6f+s3v/N5/8/1SRZAAADnklEQVR4nO3Xy3qiShSGYVYVHgAFFNGWaIzn2NpJdt//xe0ChQRQO4MOncH3jvh9sGRJsaqwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwvouwgsJUU2QoCS6wb8d5A0jKnqiKr8jfVpwf6y+zl2vE853l2uTQJ154XTfOKK/E2aYXpQNEgOZ8qwSDynGibj1OODUq8w2n++jr1ususRNvxV+FrPPx9vtBKvE2W/Tdz5jYeHoIsB7tePHk9+Xv7SmxS8iBKRFR75f+QtKK+Mlkpz0svtBLvkNFjOxvIdno6HXe31ybrWX9/JTYqvzfJcCKWbP1R9oHMhmEt3h8nn47bTnr0PDxXIqGb1OM/EXimBj12LrNI1gddjbkPzaRethx35nYnvWl+1iJW1fhPmLv0U6y2O8gbzqSjq/FyOIqLGTt9qJWoQrdtyc9szmc5XuhK/LIi7hEdOea6W+4yn2yz3VEq8XI46kaXuqd+rTeqpLdSZjL28skoD91EleMX1nGd1m310PPMD8vjblY8l91HVY75oYzcfVqinvsTVRnIfuqezD+lVkVnSv8bXY5Nrxj67TDsdJ/aklbYfW+ZiydVju97gsCNArHm7rJU4I+3g985zLSkFUbFqmC7I12OTVco4SB83ow3ZsUzFb5PocWTLscP+5xRP5KpXy7QCsJw8Lx5i+1yha1yha3mK7SyVSwZm4n0yXuYlrjzhpNqUzTjSGt52Ohvdg8vV9fyTIc4lp/D49XnMKXmnej6QOpoSlDT0oNXiX/94j9HvZi9SMt9LJqnm0g5fjx76of96PrCphYrVe6lQbmX/mF39GXUy7C2AF5dD61zF9WXjlrTXuzVN1wP013L2Dw/p3wTY0X1WMi6aNZRrw20mJsXpUO+iQm6v2qxWfk0TIbmIsxG9NwgZXTZl36MuUsXzTrq+zj5Tdp20gXv2T+PrAZ+ti8txwbJaJvu+UUrL3tU7E0v0Cbqvteqx/NXtu6li5qlv9hk2pNZ+m6h2sf+OP0s6W3MW7W0R+5K12OTFS77vXgehv+5v89bjdbePYXhyXXsazETJHlZkrxP00H3LQ7D6bizyf4LCXrDePJr3InlSmySBJO140TrsHj7mbw4zrqYk5V4m0oG2UD5amde6k2+FRslYtu2SClbN+MdyjJnqvI35WYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAN/M/2rBCF/4WGjgAAAAASUVORK5CYII=",
      arr: [120, 230, 100, 330, 400],
    },
    {
      Name: "Zodha Akbar",
      type:'movie',
      Count: 348.22,
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUAmf8Al/8Alf8Ak/8Am/8AnP8Akf/////r9v+84f/2/P/H6P/Z8f/h8v/t+v8Onv92v/+ExP/k9v+23v9Drv+Ozv+04f9pu/9Lq/+Cx/8spP9Suf8yqv92xf9EtP/n8v9nwP9as/+V0/+12P+s2/9it//z+f+h1P+a0P/N7P9ar/8cp/+f2P9xxP+m0v9ptf/B6f+s3v/N5/8/1SRZAAADnklEQVR4nO3Xy3qiShSGYVYVHgAFFNGWaIzn2NpJdt//xe0ChQRQO4MOncH3jvh9sGRJsaqwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwvouwgsJUU2QoCS6wb8d5A0jKnqiKr8jfVpwf6y+zl2vE853l2uTQJ154XTfOKK/E2aYXpQNEgOZ8qwSDynGibj1OODUq8w2n++jr1ususRNvxV+FrPPx9vtBKvE2W/Tdz5jYeHoIsB7tePHk9+Xv7SmxS8iBKRFR75f+QtKK+Mlkpz0svtBLvkNFjOxvIdno6HXe31ybrWX9/JTYqvzfJcCKWbP1R9oHMhmEt3h8nn47bTnr0PDxXIqGb1OM/EXimBj12LrNI1gddjbkPzaRethx35nYnvWl+1iJW1fhPmLv0U6y2O8gbzqSjq/FyOIqLGTt9qJWoQrdtyc9szmc5XuhK/LIi7hEdOea6W+4yn2yz3VEq8XI46kaXuqd+rTeqpLdSZjL28skoD91EleMX1nGd1m310PPMD8vjblY8l91HVY75oYzcfVqinvsTVRnIfuqezD+lVkVnSv8bXY5Nrxj67TDsdJ/aklbYfW+ZiydVju97gsCNArHm7rJU4I+3g985zLSkFUbFqmC7I12OTVco4SB83ow3ZsUzFb5PocWTLscP+5xRP5KpXy7QCsJw8Lx5i+1yha1yha3mK7SyVSwZm4n0yXuYlrjzhpNqUzTjSGt52Ohvdg8vV9fyTIc4lp/D49XnMKXmnej6QOpoSlDT0oNXiX/94j9HvZi9SMt9LJqnm0g5fjx76of96PrCphYrVe6lQbmX/mF39GXUy7C2AF5dD61zF9WXjlrTXuzVN1wP013L2Dw/p3wTY0X1WMi6aNZRrw20mJsXpUO+iQm6v2qxWfk0TIbmIsxG9NwgZXTZl36MuUsXzTrq+zj5Tdp20gXv2T+PrAZ+ti8txwbJaJvu+UUrL3tU7E0v0Cbqvteqx/NXtu6li5qlv9hk2pNZ+m6h2sf+OP0s6W3MW7W0R+5K12OTFS77vXgehv+5v89bjdbePYXhyXXsazETJHlZkrxP00H3LQ7D6bizyf4LCXrDePJr3InlSmySBJO140TrsHj7mbw4zrqYk5V4m0oG2UD5amde6k2+FRslYtu2SClbN+MdyjJnqvI35WYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAN/M/2rBCF/4WGjgAAAAASUVORK5CYII=",
      arr: [130, 230, 209, 330, 410],
    },
    {
      Name: "Bhabhiji Ghar Par Hai",
      type:'tv show',
      Count: 346.12,
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUAmf8Al/8Alf8Ak/8Am/8AnP8Akf/////r9v+84f/2/P/H6P/Z8f/h8v/t+v8Onv92v/+ExP/k9v+23v9Drv+Ozv+04f9pu/9Lq/+Cx/8spP9Suf8yqv92xf9EtP/n8v9nwP9as/+V0/+12P+s2/9it//z+f+h1P+a0P/N7P9ar/8cp/+f2P9xxP+m0v9ptf/B6f+s3v/N5/8/1SRZAAADnklEQVR4nO3Xy3qiShSGYVYVHgAFFNGWaIzn2NpJdt//xe0ChQRQO4MOncH3jvh9sGRJsaqwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwvouwgsJUU2QoCS6wb8d5A0jKnqiKr8jfVpwf6y+zl2vE853l2uTQJ154XTfOKK/E2aYXpQNEgOZ8qwSDynGibj1OODUq8w2n++jr1ususRNvxV+FrPPx9vtBKvE2W/Tdz5jYeHoIsB7tePHk9+Xv7SmxS8iBKRFR75f+QtKK+Mlkpz0svtBLvkNFjOxvIdno6HXe31ybrWX9/JTYqvzfJcCKWbP1R9oHMhmEt3h8nn47bTnr0PDxXIqGb1OM/EXimBj12LrNI1gddjbkPzaRethx35nYnvWl+1iJW1fhPmLv0U6y2O8gbzqSjq/FyOIqLGTt9qJWoQrdtyc9szmc5XuhK/LIi7hEdOea6W+4yn2yz3VEq8XI46kaXuqd+rTeqpLdSZjL28skoD91EleMX1nGd1m310PPMD8vjblY8l91HVY75oYzcfVqinvsTVRnIfuqezD+lVkVnSv8bXY5Nrxj67TDsdJ/aklbYfW+ZiydVju97gsCNArHm7rJU4I+3g985zLSkFUbFqmC7I12OTVco4SB83ow3ZsUzFb5PocWTLscP+5xRP5KpXy7QCsJw8Lx5i+1yha1yha3mK7SyVSwZm4n0yXuYlrjzhpNqUzTjSGt52Ohvdg8vV9fyTIc4lp/D49XnMKXmnej6QOpoSlDT0oNXiX/94j9HvZi9SMt9LJqnm0g5fjx76of96PrCphYrVe6lQbmX/mF39GXUy7C2AF5dD61zF9WXjlrTXuzVN1wP013L2Dw/p3wTY0X1WMi6aNZRrw20mJsXpUO+iQm6v2qxWfk0TIbmIsxG9NwgZXTZl36MuUsXzTrq+zj5Tdp20gXv2T+PrAZ+ti8txwbJaJvu+UUrL3tU7E0v0Cbqvteqx/NXtu6li5qlv9hk2pNZ+m6h2sf+OP0s6W3MW7W0R+5K12OTFS77vXgehv+5v89bjdbePYXhyXXsazETJHlZkrxP00H3LQ7D6bizyf4LCXrDePJr3InlSmySBJO140TrsHj7mbw4zrqYk5V4m0oG2UD5amde6k2+FRslYtu2SClbN+MdyjJnqvI35WYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAN/M/2rBCF/4WGjgAAAAASUVORK5CYII=",
      arr: [130, 140, 170, 330, 300],
    },
    {
      Name: "Nagiin",
      type:'tv show',
      Count: 344.20,
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUAmf8Al/8Alf8Ak/8Am/8AnP8Akf/////r9v+84f/2/P/H6P/Z8f/h8v/t+v8Onv92v/+ExP/k9v+23v9Drv+Ozv+04f9pu/9Lq/+Cx/8spP9Suf8yqv92xf9EtP/n8v9nwP9as/+V0/+12P+s2/9it//z+f+h1P+a0P/N7P9ar/8cp/+f2P9xxP+m0v9ptf/B6f+s3v/N5/8/1SRZAAADnklEQVR4nO3Xy3qiShSGYVYVHgAFFNGWaIzn2NpJdt//xe0ChQRQO4MOncH3jvh9sGRJsaqwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwvouwgsJUU2QoCS6wb8d5A0jKnqiKr8jfVpwf6y+zl2vE853l2uTQJ154XTfOKK/E2aYXpQNEgOZ8qwSDynGibj1OODUq8w2n++jr1ususRNvxV+FrPPx9vtBKvE2W/Tdz5jYeHoIsB7tePHk9+Xv7SmxS8iBKRFR75f+QtKK+Mlkpz0svtBLvkNFjOxvIdno6HXe31ybrWX9/JTYqvzfJcCKWbP1R9oHMhmEt3h8nn47bTnr0PDxXIqGb1OM/EXimBj12LrNI1gddjbkPzaRethx35nYnvWl+1iJW1fhPmLv0U6y2O8gbzqSjq/FyOIqLGTt9qJWoQrdtyc9szmc5XuhK/LIi7hEdOea6W+4yn2yz3VEq8XI46kaXuqd+rTeqpLdSZjL28skoD91EleMX1nGd1m310PPMD8vjblY8l91HVY75oYzcfVqinvsTVRnIfuqezD+lVkVnSv8bXY5Nrxj67TDsdJ/aklbYfW+ZiydVju97gsCNArHm7rJU4I+3g985zLSkFUbFqmC7I12OTVco4SB83ow3ZsUzFb5PocWTLscP+5xRP5KpXy7QCsJw8Lx5i+1yha1yha3mK7SyVSwZm4n0yXuYlrjzhpNqUzTjSGt52Ohvdg8vV9fyTIc4lp/D49XnMKXmnej6QOpoSlDT0oNXiX/94j9HvZi9SMt9LJqnm0g5fjx76of96PrCphYrVe6lQbmX/mF39GXUy7C2AF5dD61zF9WXjlrTXuzVN1wP013L2Dw/p3wTY0X1WMi6aNZRrw20mJsXpUO+iQm6v2qxWfk0TIbmIsxG9NwgZXTZl36MuUsXzTrq+zj5Tdp20gXv2T+PrAZ+ti8txwbJaJvu+UUrL3tU7E0v0Cbqvteqx/NXtu6li5qlv9hk2pNZ+m6h2sf+OP0s6W3MW7W0R+5K12OTFS77vXgehv+5v89bjdbePYXhyXXsazETJHlZkrxP00H3LQ7D6bizyf4LCXrDePJr3InlSmySBJO140TrsHj7mbw4zrqYk5V4m0oG2UD5amde6k2+FRslYtu2SClbN+MdyjJnqvI35WYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAN/M/2rBCF/4WGjgAAAAASUVORK5CYII=",
      arr: [120, 230, 209, 330, 410],
    },
    {
      Name: "Ghar Ek Mandir",
      type:'tv show',
      Count: 338.18,
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUAmf8Al/8Alf8Ak/8Am/8AnP8Akf/////r9v+84f/2/P/H6P/Z8f/h8v/t+v8Onv92v/+ExP/k9v+23v9Drv+Ozv+04f9pu/9Lq/+Cx/8spP9Suf8yqv92xf9EtP/n8v9nwP9as/+V0/+12P+s2/9it//z+f+h1P+a0P/N7P9ar/8cp/+f2P9xxP+m0v9ptf/B6f+s3v/N5/8/1SRZAAADnklEQVR4nO3Xy3qiShSGYVYVHgAFFNGWaIzn2NpJdt//xe0ChQRQO4MOncH3jvh9sGRJsaqwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwvouwgsJUU2QoCS6wb8d5A0jKnqiKr8jfVpwf6y+zl2vE853l2uTQJ154XTfOKK/E2aYXpQNEgOZ8qwSDynGibj1OODUq8w2n++jr1ususRNvxV+FrPPx9vtBKvE2W/Tdz5jYeHoIsB7tePHk9+Xv7SmxS8iBKRFR75f+QtKK+Mlkpz0svtBLvkNFjOxvIdno6HXe31ybrWX9/JTYqvzfJcCKWbP1R9oHMhmEt3h8nn47bTnr0PDxXIqGb1OM/EXimBj12LrNI1gddjbkPzaRethx35nYnvWl+1iJW1fhPmLv0U6y2O8gbzqSjq/FyOIqLGTt9qJWoQrdtyc9szmc5XuhK/LIi7hEdOea6W+4yn2yz3VEq8XI46kaXuqd+rTeqpLdSZjL28skoD91EleMX1nGd1m310PPMD8vjblY8l91HVY75oYzcfVqinvsTVRnIfuqezD+lVkVnSv8bXY5Nrxj67TDsdJ/aklbYfW+ZiydVju97gsCNArHm7rJU4I+3g985zLSkFUbFqmC7I12OTVco4SB83ow3ZsUzFb5PocWTLscP+5xRP5KpXy7QCsJw8Lx5i+1yha1yha3mK7SyVSwZm4n0yXuYlrjzhpNqUzTjSGt52Ohvdg8vV9fyTIc4lp/D49XnMKXmnej6QOpoSlDT0oNXiX/94j9HvZi9SMt9LJqnm0g5fjx76of96PrCphYrVe6lQbmX/mF39GXUy7C2AF5dD61zF9WXjlrTXuzVN1wP013L2Dw/p3wTY0X1WMi6aNZRrw20mJsXpUO+iQm6v2qxWfk0TIbmIsxG9NwgZXTZl36MuUsXzTrq+zj5Tdp20gXv2T+PrAZ+ti8txwbJaJvu+UUrL3tU7E0v0Cbqvteqx/NXtu6li5qlv9hk2pNZ+m6h2sf+OP0s6W3MW7W0R+5K12OTFS77vXgehv+5v89bjdbePYXhyXXsazETJHlZkrxP00H3LQ7D6bizyf4LCXrDePJr3InlSmySBJO140TrsHj7mbw4zrqYk5V4m0oG2UD5amde6k2+FRslYtu2SClbN+MdyjJnqvI35WYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAN/M/2rBCF/4WGjgAAAAASUVORK5CYII=",
      arr: [120, 140, 170, 330, 400],
    },
  ];

  let sortedFiles = json.sort((r1, r2) =>
    r1.value > r2.value ? 1 : r1.value < r2.value ? -1 : 0
  );

  for (let i = 0; i < sortedFiles.length; i++) {
    if (i < 10) {
      top10files.push(sortedFiles[i]);
    }
  }
  for (let i = sortedFiles.length - 1; i > 0; i--) {
    count += 1;
    if (count <= 10) {
      bottom10files.push(sortedFiles[i]);
    }
  }

  const getData = (value) => {
    setActiveTab(value);
  };
  
  return (
    <div>
      <div className="executive-summary-content-linear-tabs">
        <ExecutiveSummaryContentLinearButtonsTabs TabValue={getData} FilterTabValue= {getData}/>
      </div>
      <div>
        {activeTab === "all-content" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={json} />
            <ExecutiveSummaryContentLinearContents
              chartData={json}
              buttonTab={"linear"}
            />
          </div>
        )}
        {activeTab === "top-10" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={top10files} />
            <ExecutiveSummaryContentLinearContents
              chartData={top10files}
              buttonTab={"linear"}
            />
          </div>
        )}
        {activeTab === "bottom-10" && (
          <div className="executive-summary-content-linear-filter">
            <BubbleChart files={bottom10files} />
            <ExecutiveSummaryContentLinearContents
              chartData={bottom10files}
              buttonTab={"linear"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExecutiveSummaryContentLinear;
