import { useState } from 'react';
import { toTitleFormat } from '../utils/text';
import LoadingSpinner from '../../components/LoadingSpinner';

const FilteredStudents = ({ student, mutateAsync, setTerm, studentId, setStudentId }) => {

  const handleIsLoading = async (id) => {
    setStudentId(id);
    try {
      await mutateAsync(student?.email)
    } catch (error) {
      console.error("Something went wrong");
    } finally {
      setStudentId(null);
    }
  } 


  return (
    <li className='flex items-center gap-4 p-2 max-w-2xl'>
      <img src={student?.profileImg || "https://avatar.iran.liara.run/public/boy"} className='size-10 rounded-full object-cover' />
      <p className='font-medium'>{toTitleFormat(`${student?.firstName} ${student?.lastName}`)}</p>
      <p className='text-slate-600 mr-10'>{student?.email}</p>
      <button
        onClick={async () => {
          await handleIsLoading(student?._id)
          setStudentId(null);
        }}
        id="submitAddStudent"
        className="px-4 py-2 w-16 ml-auto bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm mr-2"
      >
        {studentId === student?._id ? (
          <div className='flex justify-center items-center gap-2'>
            <LoadingSpinner size={20} />
          </div>
        ) : "Add"}
      </button>
    </li>
  )
}

export default FilteredStudents