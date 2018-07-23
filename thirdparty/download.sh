set -e

for size in 128 280; do
  curl -o "icon$size.png" "https://png.icons8.com/?id=9747&size=$size"
done

pushd badges/
./download.sh
popd
