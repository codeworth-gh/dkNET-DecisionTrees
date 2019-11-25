### If the data were published in the context of an accompanying scientific paper, does the repository support bidirectional linkage between the them?  

If the data set accompanied an article publication or had another data set associated with it, a clear reference to the article or data set should be provided in the metadata.  The metadata for the article/data set should also contain a link to the data set.  In other words, associations should be bi-directional.  If these linkages are expressed as structured metadata, then they should be consumable by registries for PIDs such as Crossref and DataCite.

(Action:  Check landing pages provided to see whether publications are referenced and if so, whether the publication ID is in a separate field.  Check record at DataCite to see if publication link is exported-note that Data Cite often exposes little metadata on the landing page and you have to look at the XML or JSON export to see what metadata is being exported.  Crossref Event database)

#### Options
* **full:**  Repository not only records article provenance, but links that provenance to the PID such that a consumer of this metadata, e.g., DataCite, Crossref, Zenodo (OpenAIRE) or Scholix, can make use of this information?
* **good:**  originating article is clearly indicated with an appropriate metadata tag (check landing page metadata)
* **unclear:**  publication is there but not indicated by a metadata tag, so the relationship between the data set and the publication is not clear (check landing page)
* **none:**  No record of a publication (and no clear statement that there is no publication) (check landing page)
