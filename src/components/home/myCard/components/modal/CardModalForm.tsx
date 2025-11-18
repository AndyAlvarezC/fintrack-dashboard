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

const cardTypeOptions = [
  { value: 'silver', label: 'Silver' },
  { value: 'gold', label: 'Gold' },
  { value: 'platinum', label: 'Platinum' },
];

const cardNetworkOptions = [
  { value: 'visa', label: 'Visa' },
  { value: 'mastercard', label: 'Mastercard' },
];

function CardModalForm({ formData, handleInputChange }: Props) {
  return (
    <>
      <FormInput
        label="First Name"
        name="firstName"
        value={formData.firstName}
        placeholder="Ex: Andy"
        onChange={handleInputChange}
      />

      <FormInput
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        placeholder="Ex: Álvarez"
        onChange={handleInputChange}
      />

      <FormInput
        label="Card Label"
        name="cardLabel"
        value={formData.cardLabel}
        placeholder="Ex: Savings"
        onChange={handleInputChange}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormSelect
          label="Card Type"
          name="cardType"
          value={formData.cardType}
          onChange={handleInputChange}
          options={cardTypeOptions}
        />

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
