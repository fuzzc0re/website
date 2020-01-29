#!/bin/sh
aws2 s3 rm s3://$S3_BUCKET_NAME --recursive
aws2 s3 sync ./build s3://$S3_BUCKET_NAME --acl public-read --exclude \"*\" --include \"*.css\" --content-type \"text/css\" --content-encoding gzip --cache-control public,max-age=30672000
aws2 s3 sync ./build s3://$S3_BUCKET_NAME --acl public-read --exclude \"*\" --include \"*.js\" --content-type \"text/javascript\" --content-encoding gzip --cache-control public,max-age=30672000
aws2 s3 sync ./build s3://$S3_BUCKET_NAME --acl public-read --exclude \"*\" --include \"*.json\" --content-type \"application/json\" --content-encoding gzip --cache-control public,max-age=30672000
aws2 s3 sync ./build s3://$S3_BUCKET_NAME --acl public-read --exclude \"*\" --include \"*.html\" --content-type \"text/html\" --content-encoding gzip --cache-control public,max-age=30672000
aws2 s3 sync ./build s3://$S3_BUCKET_NAME --acl public-read --exclude \"*.js\" --exclude \"*.css\" --exclude \"*.json\" --exclude \"*.html\"