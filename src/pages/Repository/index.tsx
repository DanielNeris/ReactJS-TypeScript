import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/dashboar">
          <FiChevronLeft size={16} />
          voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src={} alt="teste" />
          <div>
            <strong>teste</strong>
            <p>aaaaaa</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>a</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>a</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>a</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link
          key={repository.full_name}
          to={`/repositories/${repository.full_name}`}
        >
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
