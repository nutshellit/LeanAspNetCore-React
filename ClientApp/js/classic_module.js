export default function TestModule() {
  console.log('module testmodule called');
  console.log($);
  $('#specialtext').on('click', function (e) {
    e.preventDefault();
    console.log('Hello world!!!!!');
  });
}