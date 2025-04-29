import React, { useEffect, useRef, useState } from 'react';

function CustomSlotSelect({ slots, onSelect, required }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const wrapperRef = useRef(null);

  const filteredSlots = slots.filter(slot =>
    slot.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (slot) => {
    setSelectedSlot(slot);
    onSelect(slot);
    setShowOptions(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="query__input wow fadeInUp" ref={wrapperRef} style={{ width: '100%', position: 'relative', zIndex: 10 }}>

        <div
        className="query__input__position"
        onClick={() => setShowOptions(!showOptions)}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%', // ✅ Full width
            height: '50px',
            border: '1px solid #ced4da',
            borderRadius: '6px',
            backgroundColor: '#fff',
            padding: '0 12px',
            cursor: 'pointer',
            position: 'relative',
            maxWidth: '100%',     // ✅ Override
            minWidth: 'unset'     // ✅ Remove constraint
        }}
        >

        <div
          className="form-select"
          style={{
            flex: 1,
            fontSize: '16px',
            color: selectedSlot ? '#000' : '#6c757d'
          }}
        >
          {selectedSlot ? selectedSlot.description : "Seleziona Pacchetto"}
        </div>
        <div className="query__input__icon" style={{ marginLeft: '8px' }}>
          <i className="flaticon-calendar" />
        </div>
      </div>

      {/* Hidden input for compatibility with pricing logic */}
      <input
        type="hidden"
        id="slotSelect"
        value={selectedSlot ? JSON.stringify(selectedSlot) : ''}
      />

{showOptions && (
  <div
    className="dropdown-menu show"
    style={{
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      maxHeight: '250px',
      overflowY: 'auto',
      zIndex: 9999,
      marginTop: '8px',
      background: '#fff',
      border: '1px solid #ced4da',
      borderRadius: '6px',
      width: '100%',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
    }}
  >

          <input
            type="text"
            placeholder="Search slot..."
            className="form-control"
            style={{
              margin: '8px',
              width: 'calc(100% - 16px)'
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredSlots.map((slot, index) => (
            <div
              key={index}
              onClick={() => handleSelect(slot)}
              style={{
                padding: '10px 14px',
                cursor: 'pointer',
                fontSize: '15px',
                backgroundColor:
                  slot.nights === 2 ? '#90EE90' :
                  slot.nights === 3 ? '#FFFFE0' :
                  slot.nights === 4 ? '#FFA500' :
                  slot.nights === 7 ? '#FFB6C1' : '#fff',
                borderBottom: '1px solid #eee'
              }}
            >
              {slot.description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomSlotSelect;
