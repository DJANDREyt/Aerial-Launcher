import { repositoryAssetsURL } from '../../../config/about/links'

import { toast } from '../../../lib/notifications'

export function useActions() {
  const handleEricDejaDeJoder = () => {
    toast(
      <figure>
        <img
          src={`${repositoryAssetsURL}/images/random/donald-duck-angry.gif`}
          className="h-60 object-contain rounded w-80"
          alt="Eric deja de joder"
        />
        <figcaption className="font-bold mb-1 mt-1 text-center text-lg text-muted">
          Eric deja de joder 💀
        </figcaption>
      </figure>,
      {
        style: {
          padding: 0,
        },
        unstyled: true,
      }
    )
  }
  const handleSick = () => {
    toast(
      <figure>
        <img
          src={qdasickimg}
          className="object-contain rounded w-60"
          alt="Kuda enfermo"
        />
      </figure>,
      {
        style: {
          padding: 0,
        },
        unstyled: true,
      }
    )
  }

  return {
    handleEricDejaDeJoder,
    handleSick,
  }
}

const qdasickimg =
  'data:image/jpeg;base64,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'