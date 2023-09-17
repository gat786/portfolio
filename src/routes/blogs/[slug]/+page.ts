// import { glob } from 'glob';

export async function load({params}) : Promise<Object> {
  console.log(params);
  // const images = await glob(['static/**/*.md'], )
  // console.log(images);
  return {
    'content': 'hello',
    'title': 'title',
    'date': '17/10/2023'
  }
}
