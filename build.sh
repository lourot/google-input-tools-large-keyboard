set -e

build_output=dist
rm -rf "$build_output"
unzipped_output_dirname=extension
unzipped_output="$build_output/$unzipped_output_dirname"
for file in LICENSE manifest.json popup.html popup.js README.md style.css thirdparty/icon128.png thirdparty/icon280.png; do
  mkdir -p "$unzipped_output/$(dirname $file)"
  cp "$file" "$unzipped_output/$file"
done

pushd "$build_output"
zip -r $unzipped_output_dirname{.zip,} # see https://askubuntu.com/a/525489/113686
popd
echo "$unzipped_output.zip created."
