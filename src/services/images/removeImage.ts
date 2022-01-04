import aws from 'aws-sdk'
import AppError from '../../errors/AppError';

const s3 = new aws.S3()

export function deleteFile(fileKey: string) {
  const bucketName = process.env.AWS_S3_BUCKET_NAME
  if(!bucketName) throw new AppError('Server broken: AWS_S3_BUCKET_NAME not provided')
  s3.deleteObject(
    {
      Bucket: bucketName,
      Key: fileKey,
    },
    () => null
  );
}
