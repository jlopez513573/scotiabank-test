import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppSelector } from '../store/hooks'
import { selectDocumentsList } from "../store/selectors/documentsSelector";

const DocumentsTable = () => {
  const documents = useAppSelector(selectDocumentsList);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Document Type</TableCell>
            <TableCell>Delivery Method</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {documents.map((document, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {document.document_type}
              </TableCell>
              <TableCell>{document.is_paper_flag ? "Paper" : "Paperless"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DocumentsTable