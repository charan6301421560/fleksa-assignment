
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/dataActions';

const DataList = ({ data, loading, error, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data List</h1>
      {data.map((item) => (
        <div key= {item.id}>
            <h1>{item.name}</h1>
            <h4>{item.email}</h4>
            <p>{item.address.street}</p>
            <p>{item.address.suite}</p>
            <p>{item.address.city}</p>
            <p>{item.address.zipcode}</p>
        </div>
        // <div key={item.id}>
        //   <h2>{item.title}</h2>
        //   <p>{item.body}</p>
        // </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data.data,
    loading: state.data.loading,
    error: state.data.error,
  };
};

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(DataList);
