import { AiTwotoneEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleDelete = () => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted",
            text: "Your Coffee has been deleted!",
            icon: "Success",
          });
        }
      }
    });
  };
  return (
    <div className="card card-side shadow bg-[#F5F4F1]">
      <figure>
        <img src={photo} alt="coffee img" />
      </figure>
      <div className="flex justify-between w-full items-center p-4">
        <div>
          <h2 className="card-title">Name : {name}</h2>
          <p className="text-[#5C5B5B]">Supplier : {supplier}</p>
          <p className="text-[#5C5B5B]">Price : {chef}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="bg-[#D2B48C] rounded-lg w-11 p-1">
              <AiTwotoneEye className="text-4xl text-white p-1" />
            </button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="bg-[#3C393B] rounded-lg w-11 p-1">
                <FiEdit className="text-4xl text-white p-1" />
              </button>
            </Link>
            <button
              onClick={handleDelete}
              className="bg-[#EA4744] rounded-lg w-11 p-1"
            >
              <MdDelete className="text-4xl text-white p-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
