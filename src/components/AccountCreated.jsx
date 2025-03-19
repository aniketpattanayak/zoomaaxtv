const AccountCreated = () => {
    return (
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col">
        <div className="w-40 h-40 bg-[#344FB1] rounded-full flex items-center justify-center">
          <img src="/Done.png" className="w-16 h-16" alt="Success" />
        </div>
        <h1 className="text-white font-[Gilroy-ExtraBold] pt-4">Account Successfully Created!</h1>
      </div>
    );
  };
  
  export default AccountCreated;
  