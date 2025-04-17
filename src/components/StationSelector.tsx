import React, { useState, useEffect } from 'react';
import {
  SelectChangeEvent,
  Typography,
  Paper,
  Stack,
  Autocomplete,
  TextField,
  Button,
} from '@mui/material';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import PlaceIcon from '@mui/icons-material/Place';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StationSelector: React.FC = () => {
  // State for selected values
  const [selectedLine, setSelectedLine] = useState<string>('');
  const [selectedStation, setSelectedStation] = useState<string>('');
  const [selectedDestination, setSelectedDestination] = useState<string>('');

  const options = ['Option 1', 'Option 2', 'Option 3'];
  // State for available stations based on selected line
  const [availableStations, setAvailableStations] = useState<string[]>([]);

  // Reset stations when line changes
  useEffect(() => {
  }, [selectedLine]);

  // Handlers for select changes
  const handleLineChange = (event: SelectChangeEvent) => {
    setSelectedLine(event.target.value);
  }; 
  

  return (
    <Paper sx={{ p: 3, maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
        Select Station 
      </Typography>

      <Stack spacing={2} sx={{ width: 300 }}>
        <Typography variant='h6'></Typography> 
        <Autocomplete
          options={options}
          renderInput={(params) => <TextField {...params} label="Station" />}
        />
        <Autocomplete
          options={options}
          renderInput={(params) => <TextField {...params} label="Line" />}
        />
        <Autocomplete
          options={options}
          renderInput={(params) => <TextField {...params} label="Direction" />}
        />
        <Button>Submit</Button>
      </Stack>
    </Paper>
  );
};

export default StationSelector;
