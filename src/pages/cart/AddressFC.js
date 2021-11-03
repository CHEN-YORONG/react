import React, { useState } from 'react'
import { ZipCodeTW } from 'zipcode-tw-react'
function AddressFC(props) {
  const [city, setCity] = useState({
    displayType: 'text',
    county: '台北市',
    district: '中山區',
    zipCode: '104',
    address: '敬業三路20號',
  })

  const handleChange = (e) => {
    const updatedFields = {
      ...city,
      [e.target.name]: e.target.value,
    }

    // 3. 設定回原狀態物件
    setCity(updatedFields)
  }

  // 變更地址資訊
  const handleZipCodeChange = (e) => {
    const {
      countyFieldName,
      countyValue,
      districtFieldName,
      districtValue,
      zipFieldName,
      zipValue,
    } = e
    setCity({
      [zipFieldName]: zipValue,
      [countyFieldName]: countyValue,
      [districtFieldName]: districtValue,
    })
  }

  return (
    <>
      <div className="form-group">
        <div className="form-inline">
          <ZipCodeTW
            displayType={city.displayType}
            countyValue={city.county}
            districtValue={city.district}
            zipCodeValue={city.zipCode}
            handleChangeCounty={handleChange}
            handleChangeDistrict={handleZipCodeChange}
            handleChangeZipCode={handleZipCodeChange}
            handleBlurZipCode={handleZipCodeChange}
          />
        </div>
      </div>
    </>
  )
}

export default AddressFC
