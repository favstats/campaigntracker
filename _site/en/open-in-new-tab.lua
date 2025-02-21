function Link(el)
  if el.target:match('https://favstats.github.io/de25/') then
    el.attributes.target = '_blank'
  end
  return el
end
