 <div>
                {downloads.map((address) => (
                    <div
                    key={address.id}
                    className="address-card"
                    // onClick={() => handleSelectAddress(address)}
                    >
                    <div className="address-header">
                        <div>
                        <h3 className="address-name">{address.user_name}</h3>
                        {address.company_name && (
                            <p className="company-name">{address.user_email}</p>
                        )}
                        </div>
                    </div>

                    <div className="address-details">
                        <p className="address-street">{address.street_address}</p>
                        <p className="address-city-state">{address.lead_name}</p>
                    </div>

                    <div className="contact-details">
                        <div className="contact-item">
                        <LuPhone />
                        <span>{address.lead_mobile}</span>
                        </div>
                        <div className="contact-item">
                        <CiMail />
                        {/* <span>
                            {editingAddressId === address.id ? (
                            <input
                                type="text"
                                name="email"
                                value={editedAddress.email}
                                onChange={handleInputChange}
                                className="input-address"
                            />
                            ) : (
                            address.email
                            )}
                        </span> */}
                        </div>
                    </div>
                    </div>
                )}
            </div>