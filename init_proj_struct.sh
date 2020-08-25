mkdir api config jobs services loaders models subscribers types

for d in ./*/
do
	(cd $d && touch .delete_me)
done

touch app.js
