import type { SelectOption } from '../../ui/third-party/extended/input-tags'

import { SeparatorWithTitle } from '../../ui/extended/separator'
import { InputTags } from '../../ui/third-party/extended/input-tags'

export function AccountSelectors({
  accounts,
  tags,
  onUpdateAccounts,
  onUpdateTags,
}: {
  accounts: {
    options: Array<SelectOption>
    value: Array<SelectOption>
  }
  tags: {
    options: Array<SelectOption>
    value: Array<SelectOption>
  }
  onUpdateAccounts?: (value: Array<SelectOption>) => void
  onUpdateTags?: (value: Array<SelectOption>) => void
}) {
  return (
    <div className="grid gap-4">
      <InputTags
        placeholder="Select some accounts..."
        options={accounts.options}
        value={accounts.value}
        onChange={onUpdateAccounts ?? (() => {})}
      />
      <SeparatorWithTitle>Or</SeparatorWithTitle>
      <InputTags
        placeholder="Select some tags..."
        options={tags.options}
        value={tags.value}
        onChange={onUpdateTags ?? (() => {})}
      />
    </div>
  )
}