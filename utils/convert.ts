export const convertNetworkRank = (packageRank: string, monthlyPackageRank: string) => {
    const RANKS: Record<string, string> = {
      VIP: 'VIP',
      VIP_PLUS: 'VIP_PLUS',
      MVP: 'MVP',
      MVP_PLUS: 'MVP+',
    };
  
    if (packageRank == null) {
      return ' ';
    } else if (monthlyPackageRank !== 'NONE' && packageRank !== 'NONE') {
      return '[MVP++]';
    } else {
      return `[${RANKS[packageRank]}]`;
    }
};

export const convertNetworkExp = (exp: number) => {
    const BASE = 10_000;
    const GROWTH = 2_500;
  
    const REVERSE_PQ_PREFIX = -(BASE - 0.5 * GROWTH) / GROWTH;
    const REVERSE_CONST = REVERSE_PQ_PREFIX * REVERSE_PQ_PREFIX;
    const GROWTH_DIVIDES_2 = 2 / GROWTH;
  
    return exp < 0
      ? 1
      : Math.floor(
          1 +
            REVERSE_PQ_PREFIX +
            Math.sqrt(REVERSE_CONST + GROWTH_DIVIDES_2 * exp)
    );
};