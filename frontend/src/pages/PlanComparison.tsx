import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import TableHeader from '../components/PlanComparison/TableHeader';
import TableRowGroup from '../components/PlanComparison/TableRowGroup';
import VerticalBar from '../components/Common/VerticalBar';
import { planComparisonInfoState } from '../recoil/planComparisonState';

type inputType = {
  age: number;
  gender: number;
  codes: string;
};

function PlanComparison() {
  const location = useLocation();
  const input = location.state as inputType;
  const info = useRecoilValue(planComparisonInfoState({ ...input }));

  return (
    <>
      {info && (
        <TableContainer component={Paper}>
          <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
            {/* 회사 & 상품 프로필 */}
            <TableHead>
              <TableHeader companies={info.company} />
            </TableHead>
            <TableBody>
              {/* 치츄 지수 그래프 */}
              <TableRow>
                <TableCell>치츄지수 (?)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                {info['치츄지수'].map(item => (
                  <TableCell align="center" key={item.product_code}>
                    <VerticalBar value={item.total_index} />
                  </TableCell>
                ))}
              </TableRow>

              {/* 각 담보 그룹들을 출력 */}
              {['치아보철치료', '치아보전치료', '치수치료'].map(
                optionGroupName => (
                  <TableRowGroup
                    options={info[optionGroupName]}
                    key={optionGroupName}
                  />
                ),
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default PlanComparison;
