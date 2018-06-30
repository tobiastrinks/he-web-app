export default (context) => {
  global.logger.logReq(context.req.method, context.req.url, context.res.error || '');
  return true;
}
