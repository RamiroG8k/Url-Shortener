import Url from '../models/UrlModel';
import { isUri } from 'valid-url';
import { generate } from 'shortid';

export const redirect = async (req, res) => {
    try {
        // find a document match to the code in req.params.code
        const url = await Url.findOne({
            urlCode: req.params.code
        });

        if (url) {
            // when valid we perform a redirect
            return res.redirect(url.longUrl);
        } else {
            // else return a not found 404 status
            return res.status(404).json('No URL Found');
        }

    } catch (err) {
        res.status(500).json('Server Error');
    }
};

export const makeShort = async (req, res) => {
    const { longUrl } = req.body;

    // The API base Url endpoint
    const baseUrl = 'http:localhost:3000/api/url'

    // check base url if valid using the validUrl.isUri method
    if (!isUri(baseUrl)) {
        return res.status(401).json('Invalid base URL')
    }

    // check long url if valid using the validUrl.isUri method
    if (isUri(longUrl)) {

        // if valid, we create the url code
        const urlCode = generate();
        try {
            /* The findOne() provides a match to only the subset of the documents 
            in the collection that match the query. In this case, before creating the short URL,
            we check if the long URL was in the DB ,else we create it.
            */
            let url = await Url.findOne({
                longUrl
            });

            // url exist and return the respose
            if (url) {
                res.json(url);
            } else {
                // join the generated short code the the base url
                const shortUrl = baseUrl + '/' + urlCode;

                // invoking the Url model and saving to the DB
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });
                await url.save();
                res.status(201).json(url);
            }
        } catch (err) {
            console.log(err);
            res.status(500).json('Server Error');
        }
    } else {
        res.status(401).json('Invalid longUrl');
    }
};
