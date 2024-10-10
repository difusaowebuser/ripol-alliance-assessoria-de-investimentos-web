import * as React from "react";

export const Footer = () => {
  return (
    <footer className="text-white border-t-8 border-[--primary-color]">
      <div className="bg-[--brown-color] py-6">
        <div className="flex items-center justify-between container mx-auto flex-col lg:flex-row">
          <p className="lg:pl-4">
            A Assessoria de Investimentos inscrita sobre o CNPJ
            36.349.961/0001-53 é uma empresa de Assessoria de Investimentos
            devidamente registrada na Comissão de Valores Mobiliários na forma
            da resolução CVM178/23 9 (”Sociedade”), que mantém contrato de
            distribuição de produtos financeiros com a XP Investimentos
            Corretora de Câmbio, Títulos e Valores Mobiliários S.A. (“XP”) e
            pode, por conta e ordem de seus clientes, operar no mercado de
            capitais segundo a legislação vigente. Na forma da legislação da
            CVM, o Assessor de Investimento não pode administrar o gerir o
            patrimônio de investidores. O investimento em ações é um
            investimento de risco e rentabilidade passada não é garantia de
            rentabilidade futura. Na realização de operações com de derivativos
            existe a possibilidade de perda superiores aos valores investidos,
            podendo resultar em significativas perdas patrimoniais. A sociedade
            poderá exercer atividades complementares relacionadas aos mercados
            financeiros, securitário, de previdência e capitalização, desde que
            não conflitem com a atividade de assessoria de investimentos,
            podendo ser realizada por meio da pessoa jurídica acima descrita ou
            por meio de pessoa jurídica terceira. Todas as atividades são
            prestadas mantendo a devida segregação e em cumprimento ao quanto
            previsto nas regras da CVM ou de outros órgãos reguladores e
            autorreguladores. Para informações e dúvidas sobre produtos. contate
            seu assessor de investimentos. Para reclamações, contate a Ouvidoria
            da XP pelo telefone 0800 722 3730.
          </p>
          <div></div>
        </div>
      </div>
      <div className="bg-[--primary-color] py-6">
        <div className="flex items-center justify-center container mx-auto">
          <p>
            Todos os direitos reservados a{" "}
            <span className="font-bold">
              Ripol Alliance Assessoria de Investimentos
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
