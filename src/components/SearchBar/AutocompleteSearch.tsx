import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'
import SearchIcon from '@mui/icons-material/Search'

interface Data {
  id: string
  name: string
}

// function sleep(delay = 0) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay)
//   })
// }

interface AutocompleteSearchProps {
  label: string
  data: Data[]
  onFilter?: (value: string) => void
  onCancelSearch?: () => void
}

const AutocompleteSearch = ({
  label,
  data,
  onFilter,
  onCancelSearch,
}: AutocompleteSearchProps) => {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<readonly Data[]>([])
  const loading = open && options.length === 0

  useEffect(() => {
    let active = true

    if (!loading) {
      return undefined
    }

    ; (async () => {
      // await sleep(1e3) // For demo purposes.

      if (active) {
        setOptions([...data])
      }
    })()

    return () => {
      active = false
    }
  }, [loading])

  useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{
        width: 300,
        backgroundColor: 'background.paper',
        borderRadius: '8px',
      }}
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option: Data) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <>
          <TextField
            {...params}
            size="small"
            label={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <SearchIcon sx={{ color: 'info.main' }} />
                <span style={{ marginLeft: 8 }}>{label}</span>
              </div>
            }
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        </>
      )}
      onChange={(event, value: Data) => {
        if (value) {
          setOpen(false)
          setOptions([])
          onFilter && onFilter(value.name)
        }
        if (value === null) {
          onCancelSearch && onCancelSearch()
        }
      }}
    />
  )
}

export default AutocompleteSearch
