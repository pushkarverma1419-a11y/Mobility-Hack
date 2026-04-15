function predictScore(current, history, time, event) {
  const trafficMap = {low:20, medium:50, high:85};
  const timeMap = {morning:70, afternoon:50, evening:80, night:20};
  const eventMap = {none:0, holiday:20, parade:40, rain:30};

  const historyAvg = history.reduce((a,b)=>a+b,0)/history.length;

  return (
    trafficMap[current]*0.4 +
    historyAvg*0.3 +
    timeMap[time]*0.2 +
    eventMap[event]*0.1
  );
}
