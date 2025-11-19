import { memo } from 'react';

import type { FormData } from './CardModal';

import FormInput from './FormInput';
import FormSelect from './FormSelect';

interface Props {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

// Card Types Select Options
const cardTypeOptions = [
  { value: 'silver', label: 'Silver' },
  { value: 'gold', label: 'Gold' },
  { value: 'platinum', label: 'Platinum' },
];

// Card Network Select Options
const cardNetworkOptions = [
  { value: 'visa', label: 'Visa' },
  { value: 'mastercard', label: 'Mastercard' },
];

function CardModalForm({ formData, handleInputChange }: Props) {
  return (
    <>
      {/* Inputs & Selects */}

      {/* Inputs */}
      {/* First Name Input */}
      <FormInput
        label="First Name"
        name="firstName"
        value={formData.firstName}
        placeholder="Ex: Andy"
        onChange={handleInputChange}
      />

      {/* Last Name Input */}
      <FormInput
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        placeholder="Ex: Álvarez"
        onChange={handleInputChange}
      />

      {/* Card Label Input */}
      <FormInput
        label="Card Label"
        name="cardLabel"
        value={formData.cardLabel}
        placeholder="Ex: Savings"
        onChange={handleInputChange}
      />

      {/* Selects */}
      <div className="grid grid-cols-2 gap-4">
        {/*  Card Type Select */}
        <FormSelect
          label="Card Type"
          name="cardType"
          value={formData.cardType}
          onChange={handleInputChange}
          options={cardTypeOptions}
        />

        {/*  Card Network Select */}
        <FormSelect
          label="Card Network"
          name="cardNetwork"
          value={formData.cardNetwork}
          onChange={handleInputChange}
          options={cardNetworkOptions}
        />
      </div>
    </>
  );
}

export default memo(CardModalForm);
