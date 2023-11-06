import * as yup from 'yup';
import { GalleryType } from '../types/gallery';

export function validatePassword(value: string, context: yup.TestContext): boolean{
  if(!context.parent.username) return false

  const username = context.parent.username as string;
  const capitalizeUserName = username.charAt(0).toUpperCase() + username.slice(1);
  return  value === ('123'+ capitalizeUserName)
}

export async function onDownloadPicture(picture: GalleryType | undefined): Promise<void> {
  if(!picture) return

  const response = await fetch(picture.download_url);
  const blobImage = await response.blob();
  const href = URL.createObjectURL(blobImage);

  const anchorElement = document.createElement('a');
  anchorElement.href = href;
  anchorElement.download = `${picture.author}${picture.width}.jpg`;
  anchorElement.click();
}
