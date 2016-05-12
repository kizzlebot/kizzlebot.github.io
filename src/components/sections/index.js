function requireAll(requireContext) {
  return requireContext.keys().reduce((prev, curr, index, array) => {
    if (curr == 'index.js') return prev ;
    var k = curr.slice(2).replace('.js','');
    var req = requireContext(curr);
    prev[k] = (req.default) ? req.default : req;
    return prev ;
  }, {});
}


module.exports = requireAll(require.context("./", false, /^\.\/(?!index).*\.js/));
